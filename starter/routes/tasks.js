const express = require("express");
const router = express.Router(); //boilerplate
const { getAllTasks } = require("../controllers/tasks");

router.get("/", getAllTasks); // we get the function from the controllers so we dont fill here up

module.exports = router;
