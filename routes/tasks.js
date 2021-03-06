var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

//Models
var Task = require("../models/Task.js");

/* GET tasks list */
router.get("/:project_id", function (req, res) {
  Task.find({'project_id':req.params.project_id}).exec(function (err, tasks) {
    if (err) res.status(500).send(err);
    else res.status(200).json(tasks);
    console.log("TASKS: ",tasks);
  });
});

/* POST a new task */
router.post("/", function (req, res) {
  console.log(req.body);
  Task.create(req.body, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
    console.log(err);
  });
});

/* PUT an existing task */
router.put("/:id", function (req, res) {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE an existing task */
router.delete("/:id", function (req, res) {
  Task.findByIdAndDelete(req.params.id, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
