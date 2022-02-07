const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;
const mongoDbConnection = () => {
  mongoose
    .connect(MONGODB_URL + MONGODB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("yeah we're connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = mongoDbConnection;
