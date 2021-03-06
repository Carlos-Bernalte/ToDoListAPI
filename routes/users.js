var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

//Models
var User = require('../models/User.js');

/* USER exists */
// Function to return if a user exists using the username and password provided and router object

router.get('/:username', function (req, res) {
  console.log('Get one');
  console.log(req.params);
  User.find({'username':req.params.username}).exec(function(err, userinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(userinfo);
    console.log(userinfo);
  });

});

/* GET user list */
router.get('/', function (req, res) {
  console.log('Get all');
  User.find(req).exec(function(err, users) {
    if (err) res.status(500).send(err);
    else res.status(200).json(users);
  });
});

/* POST a new user*/
router.post('/', function (req, res) {
    User.create(req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
    console.log(err);
  });
});

/* PUT an existing user */
router.put('/:id', function (req, res) {

    User.findByIdAndUpdate(req.params.id, req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

/* DELETE an existing user */
router.delete('/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
