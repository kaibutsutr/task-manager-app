const getAllTasks = (req, res) => {
  res.send("all items");
};
const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = (req, res) => {
  res.json(req.body);
};
const patchTask = (req, res) => {
  res.send("update item");
};
const deleteTask = (req, res) => {
  res.send("delete item");
};
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  patchTask,
  deleteTask,
};
