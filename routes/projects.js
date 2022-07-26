var express = require("express");
var router = express.Router();
var projectController = require("../controllers/projectController");

router
  .get("/:owner", projectController.getAllProjectsFromUser)
  .post("/", projectController.postNewProject)
  .put("/:id", projectController.putExistingProject)
  .delete("/:id", projectController.deleteExistingProject);

module.exports = router;
