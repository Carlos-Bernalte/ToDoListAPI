//Models
var Task = require("../models/Task.js");

/* GET tasks list */
const getTasksFromProject = (req, res) => {
  Task.find({'project_id':req.params.project_id}).exec(function (err, tasks) {
    if (err) res.status(500).send(err);
    else res.status(200).json(tasks);
  });
};

/* POST a new task */
const postNewTask = (req, res) => {
  Task.create(req.body, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

/* PUT an existing task */
const putExistingTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

/* DELETE an existing task */
const deleteExistingTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id, function (err, taskinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};
module.exports = {
    getTasksFromProject,
    postNewTask,
    putExistingTask,
    deleteExistingTask
};