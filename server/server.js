const express = require("express");
const cors = require("cors");
const mongoDbConnection = require("./connection/mongodbConnection");
const port = process.env.PORT || 5000;
const userRouter = require("./routers/users");
const postRouter = require("./routers/posts");
const app = express();
const dotenv = require("dotenv");
const {isAuthorized} = require("./middlesware/isAuthorized");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config();
mongoDbConnection();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.use(isAuthorized);
app.use("/posts", postRouter);
app.get("/test", (req, res, next) => {
  user = req.user.username;
  res.status(200).json({msg: "auth", user});
});

app.listen(port || 5000, () => {
  console.log("connected to the server " + port);
});
