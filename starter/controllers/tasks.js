const Task = require("../models/Task"); // bring our Task Scheme here

const createTask = async (req, res) => {
  // change function from callback to async, which means it returns a promise
  try {
    // we need to put our async function into a try catch block so we can deal with errors easily
    const task = await Task.create(req.body); // try to read req body and write data into db with Task scheme.Now task is an object from Task class.If successful go to next line
    // if promise is rejected, go to catch error block
    res.status(201).json({ task }); // respond with success and send the task model as json
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 is generic server error code. Send json file with error note
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //find({}) is find all
    res.status(200).json({ tasks }); // same as tasks:tasks
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 is generic server error code. Send json file with error note
  }
};
const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const patchTask = (req, res) => {
  res.send("update item");
};
const deleteTask = (req, res) => {
  res.send("delete item");
};

//callback method:
// const getAllTasks = (req, res) => {
//   res.send("all items");
// };
// const getSingleTask = (req, res) => {
//   res.json({ id: req.params.id });
// };
// const createTask = (req, res) => {
//   res.json(req.body);
// };
// const patchTask = (req, res) => {
//   res.send("update item");
// };
// const deleteTask = (req, res) => {
//   res.send("delete item");
// };
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  patchTask,
  deleteTask,
};
