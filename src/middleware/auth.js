const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "Authorization token missing" });
    }

    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decodedData || !decodedData.id) {
      return res.status(401).json({ msg: "Invalid token" });
    }
    req.userId = decodedData.id;

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

module.exports = auth;
