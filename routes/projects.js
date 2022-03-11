var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

//Models
var Task = require('../models/Task.js');

var db = mongoose.connection;

/* GET posts listing ordered by publicationdate. */
router.get('/', function (req, res) {
    Task.find().sort('-deadline').exec(function(err, posts) {
      if (err) res.status(500).send(err);
      else res.status(200).json(posts);
    });
});

/* GET all posts from an user by user Email */
router.get('/all/:email', function (req, res) {
    Task.find({'email':req.params.email}).sort('-publicationdate').exec(function (err, posts) {
      if (err) res.status(500).send(err);
      else res.status(200).json(posts);
    });
});

/* POST a new task*/
router.task('/', function (req, res) {
    Task.create(req.body, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* PUT an existing task */
router.put('/:id', function (req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE an existing task */
router.delete('/:id', function (req, res) {
    Task.findByIdAndDelete(req.params.id, function (err, postinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;