const jwt = require("jsonwebtoken");
const isAuthorized = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({msg: "error not authorized"});
  }

  user = await jwt.verify(token, "mysecret");

  req.user = user;

  next();
};
module.exports = {isAuthorized};
