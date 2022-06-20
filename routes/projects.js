var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

//Models
var Project = require("../models/Project.js");

/* GET project list from a user*/
router.get("/", function (req, res) {
  Project.find().exec(function (err, tasks) {
    if (err) res.status(500).send(err);
    else res.status(200).json(tasks);
  });
});

/* POST a new project*/
router.post("/", function (req, res) {
  Project.create(req.body, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* PUT an existing project */
router.put("/:id", function (req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE an existing project */
router.delete("/:id", function (req, res) {
  Project.findByIdAndDelete(req.params.id, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
