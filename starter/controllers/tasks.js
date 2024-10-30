const Task = require("../models/Task"); // bring our Task Scheme here
const {
  CustomAPIError,
  createCustomAPIError,
} = require("../errors/custom-error"); // bring custom error here

const createTask = async (req, res, next) => {
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

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({}); //find({}) is find all. tasks is plural so mongoodse knows its many documents. Singular means its a singular doc
    res.status(200).json({ tasks }); // same as tasks:tasks
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 is generic server error code. Send json file with error note
  }
};
const getSingleTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params; //destructure id from req.params and name it as taskID same as const id=req.params.id
    const task = await Task.findOne({ _id: taskID }); // look for db to find document with given ID
    if (!task) {
      return next(createCustomAPIError("No task with that ID!", 404));
      // if task id returned a NULL value, give 404 error and DONT execute rest of the function because you will get double error.
    }
    res.status(200).json({ task }); // same as task:task
  } catch (error) {
    next(error); // 500 is generic server error code. Send json file with error note
  }
};

const patchTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params; //destructure id from req.params and name it as taskID same as const id=req.params.id
    const taskData = req.body;
    const task = await Task.findOneAndUpdate({ _id: taskID }, taskData, {
      new: true,
      runValidators: true,
    }); // look for db to find document with given ID. if it doesnt exists, it will return NULL otherwise its deleted
    // update content with taskData
    // third variable is options. new:true means always show the new version of data instead of unedited version.
    // runValidators: true means run schema validators on newly edited object, this is false by default!!!!
    if (!task) {
      // it returned null
      return next(createCustomAPIError("No task with that ID!", 404)); // if task id returned a NULL value, give 404 error and DONT execute rest of the function because you will get double error.
    }

    res.status(200).json({ task }); // show the updated task
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 is generic server error code. Send json file with error note
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params; //destructure id from req.params and name it as taskID same as const id=req.params.id
    const task = await Task.findOneAndDelete({ _id: taskID }); // look for db to find document with given ID. if it doesnt exists, it will return NULL otherwise its deleted
    if (!task) {
      // it returned null
      return next(createCustomAPIError("No task with that ID!", 404)); // if task id returned a NULL value, give 404 error and DONT execute rest of the function because you will get double error.
    }

    res.status(200).json({ task }); // show the deleted task
  } catch (error) {
    res.status(500).json({ msg: error }); // 500 is generic server error code. Send json file with error note
  }
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
