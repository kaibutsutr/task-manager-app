require("./db/connect");
const express = require("express"); //boilerplate for basic express server
const app = express();
const port = 3000; // use PORT in env, if its null then use 3000
const connectDB = require("./db/connect");
require("dotenv").config(); //dotenv for .env file
const notFound = require("./middleware/not-found"); // we created a mw to show custom error screens
const errorHandler = require("./middleware/error-handler");

//middlewares
app.use(express.json()); //json read and write
app.use(express.static("./public")); // use static files for frontend in public folder

//routers
const tasks = require("./routes/tasks"); //schema
app.use("/api/v1/tasks", tasks); //model

app.use(notFound); // custom notfound message
app.use(errorHandler); // custom error handler

// custom error screen

// we build a start function to start our server. We want to run our db first then if no errors start listening on port.
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}`)); // promise fulfilled
  } catch (error) {
    console.log(error); // promise rejected
  }
};
start(); // we invoke the function to start our server
