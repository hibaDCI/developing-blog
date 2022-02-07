const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {type: "string"},
  email: {type: String},
  password: {type: String},
  posts: {type: Array},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
