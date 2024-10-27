const express = require("express");
const router = express.Router(); //boilerplate
const {
  getAllTasks,
  getSingleTask,
  createTask,
  patchTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks); // we get the function from the controllers so we dont fill here up
router.get("/:id", getSingleTask); // get single task with given ID
router.post("/", createTask);
router.patch("/:id", patchTask);
router.delete("/:id", deleteTask);

module.exports = router;
