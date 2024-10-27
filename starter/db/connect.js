const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://azizdurmus1987:eIGJrQkaEwh2xJST@nodeexpress.sbyrj.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpress";
const connectDB = (url) => {
  mongoose
    .connect(connectionString) // this is a promise so we have then and catch options. If successfull, then happens, if not error
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
