const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "..", "config", "config.env") });

const cors = require("cors");
const jwt = require("jsonwebtoken");
const connectDB = require("./config/db");
const compression = require("compression");
const Message = require("./models/Message");
const { sendChatMail } = require("./controllers/users");
const User = require("./models/User");

const PORT = process.env.PORT || 5000;
const app = express();

const ALLOWED_ORIGINS = (
  process.env.ALLOWED_ORIGINS || "https://bookxchanger.netlify.app"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(compression());
if (typeof window === "undefined") {
  global.window = {};
}
connectDB();

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "authorization",
    "Content-Type",
    "origin",
    "x-requested-with",
  ],
  credentials: true,
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Body parsers (note: large limits kept for image upload feature)
app.use(express.json({ limit: "80mb" }));
app.use(express.urlencoded({ limit: "80mb", extended: true }));

app.get("/", (req, res) => {
  res.send("This is Bookxchanger");
});

app.use("/books/", require("./routes/books"));
app.use("/users/", require("./routes/users"));

const server = app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);

const io = require("socket.io")(server, {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Require a valid JWT on every Socket.IO connection
io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error("Authentication required"));
  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    socket.userId = payload.id;
    next();
  } catch {
    next(new Error("Invalid token"));
  }
});

io.on("connection", async (socket) => {
  // Join the user's own room using the verified identity
  socket.join(socket.userId);

  socket.on("disconnect", () => {});

  socket.on("landing_page", () => {});

  socket.on("login", () => {
    // Room is already joined above using the verified socket.userId
  });

  socket.on("logout", () => {
    socket.leave(socket.userId);
  });

  socket.on("join", async (data) => {
    try {
      if (!data || !data.receiver) return;
      const messages = await Message.find({
        $or: [
          { from: socket.userId, to: data.receiver },
          { from: data.receiver, to: socket.userId },
        ],
      });

      socket.emit("initial_msgs", messages);
    } catch (err) {
      // swallow
    }
  });

  socket.on("message", async (msg) => {
    try {
      if (!msg || !msg.to) return;
      const message = new Message({
        from: socket.userId,        // always use server-verified identity
        to: msg.to,
        content: msg.content,
        fromName: msg.fromName,
        sentAt: Date.now(),
      });
      await message.save();
      const outgoing = {
        content: message.content,
        from: message.from,
        to: message.to,
        fromName: msg.fromName,
        sentAt: message.sentAt,
      };
      if (socket.adapter.rooms.has(msg.to)) {
        io.sockets.in(socket.userId).emit("send_msg", outgoing);
        io.sockets.in(msg.to).emit("send_msg", outgoing);
      } else {
        io.sockets.in(socket.userId).emit("send_msg", outgoing);
        const receiver = await User.findById(message.to);
        if (receiver) {
          await sendChatMail(
            receiver.email,
            receiver.name,
            message.fromName,
            `https://bookxchanger.netlify.app/user/${message.from}`,
          );
        }
      }
    } catch (err) {
      // swallow
    }
  });
});
