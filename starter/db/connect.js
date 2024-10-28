const mongoose = require("mongoose"); // we use mongoose to deal with db

const connectDB = (url) => {
  mongoose.connect(url); // this is a promise so we have then and catch options. If successfull, then happens, if not error
};
module.exports = connectDB;
