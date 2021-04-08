const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const compression = require('compression')
const http = require('http')
const Message = require('./models/Message')


//port
const PORT = process.env.PORT || 5000;

//Loads .env file contents into | process.env.
dotenv.config({ path: "./config/config.env" });

const app = express();

options={
  cors:true,
  origins:["http://localhost:3000"],
}
//create an http server from express app
// const server = http.createServer(app)
// const io = require('socket.io')(server, options);



//compress
app.use(compression())
//cross origin request
// app.use(cors())

if (typeof window === 'undefined') {
  global.window = {}
}
//connect to databases
connectDB();

app.use((req, res, next) => {
  // console.log("Running.")
  // console.log(req.method);
  res.append("Access-Control-Allow-Origin", "http://localhost:3000");
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.append(
    "Access-Control-Allow-Headers",
    "authorization,Content-Type,origin, x-requested-with"
  );
  res.append("Access-Control-Allow-Credentials", "true");
  res.append("Origin", "http://localhost:3000");
  // res.append("optionsSuccessStatus","200")
  res.append("Access-Control-Max-Age", "86400");
  // if(req.method=="OPTIONS")
  //   res.sendStatus(200)
  // console.log(res.statusCode);
  next();
});

//body parser middleware for accepting json
app.use(express.json({ limit: "80mb", extended: true }));

//middleware for accepting data from forms
app.use(express.urlencoded({ limit: "80mb", extended: true }));

// //sending and receiving images data through form or json
// //limit : Controls the maximum request body size.
// app.use(body_parser.json({limit:"30mb",extended:true}))
// app.use(body_parser.urlencoded({limit:"30mb",extended:true}))

//routes
app.use("/books/", require("./routes/books"));
app.use("/users/", require("./routes/users"));

var server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

options={
  cors:true,
  origins:["http://localhost:3000"],
} 
const io = require('socket.io')(server,options)

io.on('connection', async(socket) => {
  console.log("connected "+socket.id)
  console.log(socket.rooms)

  socket.on('disconnect',()=>{
    console.log("disconnected")
  })
  
  socket.on('landing_page',(data)=>{
    console.log(data)
    
  })

  socket.on('login',(data)=>{
    
    if(!socket.rooms.has(data.id)){
      socket.join(data.id)
      console.log(data.id+" joined room")
    }else{
      console.log("already in room")
    }
    console.log(socket.rooms)
    // console.log(socket.adapter.rooms)
  })

  socket.on('logout',(data)=>{
    console.log(socket.rooms)
    socket.leave(data.id)
    console.log(data.id+" has left")
  })

  socket.on('join',async(data)=>{
    socket.join(data.receiver);
    console.log("both"+data.id+" "+data.receiver)
    var messages = await Message.find({$or:[{from:data.id,to:data.receiver},{from:data.receiver,to:data.id}] })
    console.log(messages)
    const msgs = []
    messages.forEach(msg=>{
      msgs.push({content:msg.content,to:msg.to,from:msg.from,sentAt:msg.sentAt})
    })
    
    
    socket.emit('initial_msgs',msgs)
  })


  socket.on('message',async(msg)=>{
    //save to database
    try{
    console.log(msg)
      console.log("from "+msg.from+" to "+msg.to)
      const message = new Message({
        from:msg.from,to:msg.to,content:msg.content,sentAt : Date.now()
      })
      await message.save()
     
      console.log(message.sentAt.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
      console.log(socket.adapter.rooms)
      // console.log(msg.to)
      console.log("sending msg")
   
      await io.sockets.in(msg.to).emit( 'send_msg', {content:message.content,from:message.from,to:message.to,fromName:msg.fromName,sentAt:message.sentAt} );

    }catch(err){
      console.log("Some error occured")
    }  
  })
})





