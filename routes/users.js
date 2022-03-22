var express = require('express');
var router = express.Router();


//Models
var User = require('../models/Users.js');

/* GET user list */
router.get('/', function (req, res) {
  User.find().exec(function(err, users) {
    if (err) res.status(500).send(err);
    else res.status(200).json(users);
  });
});

/* POST a new user*/
router.post('/', function (req, res) {
    User.create(req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
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
