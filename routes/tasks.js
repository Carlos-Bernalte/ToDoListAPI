var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

var taskController = require("../controllers/taskController.js");

router
  .get("/:project_id", taskController.getTasksFromProject)
  .post("/", taskController.postNewTask)
  .put("/:id", taskController.putExistingTask)
  .delete("/:id", taskController.deleteExistingTask);

module.exports = router;
