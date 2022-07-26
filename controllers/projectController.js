var Project = require("../models/Project.js");

/* GET All projects list from a user*/
const getAllProjectsFromUser = (req, res) => {
  Project.find({'owner':req.params.owner}).exec(function (err, tasks) {
    if (err) res.status(500).send(err);
    else res.status(200).json(tasks);
  });
};

/* POST a new project*/
const postNewProject = (req, res) => {
  Project.create(req.body, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

/* PUT an existing project */
const putExistingProject = (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

/* DELETE an existing project */
const deleteExistingProject = (req, res) => {
  Project.findByIdAndDelete(req.params.id, function (err, projectinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

module.exports = {
    getAllProjectsFromUser,
    postNewProject,
    putExistingProject,
    deleteExistingProject
};