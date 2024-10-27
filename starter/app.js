const express = require("express"); //boilerplate for basic express server
const app = express();
const port = 3000;
//middlewares
app.use(express.json());

//routers
const tasks = require("./routes/tasks");

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Hello world"); // test message
});

app.listen(port, console.log(`server is listening on ${port}`));
