const jwt = require("jsonwebtoken");
const Post = require("../models/Post");

const createPost = async (req, res, next) => {
  const data = req.body;
  const token = req.cookies.access_token;

  if (token) {
    const verifyToken = jwt.verify(token, "mysecret");
    data.author = verifyToken.userId;
    const newPost = await new Post(data);
    console.log(newPost);

    res.send({msg: newPost});
    return;
  }
  res.send({msg: "no token found"});
};
module.exports = {createPost};
