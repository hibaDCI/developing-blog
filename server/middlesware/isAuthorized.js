const jwt = require("jsonwebtoken");
const isAuthorized = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return res.status(401).json({msg: "error not authorized"});
  }
  next();
};
module.exports = {isAuthorized};
