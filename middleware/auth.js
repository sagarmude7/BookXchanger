const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
      req.userId = decodedData?.id;
    }

    next();
  } catch (err) {}
};

module.exports = auth;
