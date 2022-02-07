const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const {validationResult} = require("express-validator");
const signUpUser = async (req, res, next) => {
  const {email, password, username} = req.body;
  if (!email || !password || !username) {
    res.status(403).json({error: "you should inter all required info"});
    return;
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  userFound = await User.findOne({email});
  if (userFound)
    return res.status(403).json({error: "This email is already registered"});

  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = await new User({email, password: hashedPass, username});
  await newUser.save();
  const payload = {username: newUser, id: newUser._id};
  const token = jwt.sign(payload, "mysecret");
  res
    .cookie("access_token", token, {httpOnly: true})
    .json({msg: "welcome in our website"});
};

const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(403).json({error: "you should inter all required info"});
    return;
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  try {
    const user = await User.findOne({email});
    if (user) {
      console.log(user, "user");
      const matchedPass = await bcrypt.compare(password, user.password);
      if (matchedPass) {
        const payload = {username: user.username, userId: user._id};
        console.log("pay", payload);
        const token = jwt.sign(payload, "mysecret");
        //!  httpOnly the token is only available true to the http or fetch and not read with js on some where else
        res
          .cookie("access_token", token, {httpOnly: true})
          .json({msg: "logged in"});
      } else {
        res.status(400).json({msg: "password not matching"});
      }
    }
  } catch (error) {
    res.send(error);
  }
};

const updatePassword = async (req, res, next) => {
  const {email, password, newPassword} = req.body;
  const user = await User.findOne({email: email});
  if (user) {
    console.log(user, "before");
    const matchedPass = await bcrypt.compare(password, user.password);
    if (matchedPass) {
      const newPass = await bcrypt.hash(newPassword, 10);
      await user.update({password: newPass});
      console.log(user);
      res.status(200).json({mag: "password updated"});
    }
  }
};

const testCookies = (req, res, next) => {
  // const cookie = req.cookies.access_token;
  const cookie2 = req.cookies;

  // console.log(cookie, "cookie");
  console.log(cookie2, "cookie2");
};

module.exports = {signUpUser, loginUser, updatePassword, testCookies};
