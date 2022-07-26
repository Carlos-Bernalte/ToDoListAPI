//Models
var User = require('../models/User.js');

const getUserExists = (req, res) => {
  User.find({'username':req.params.username}).exec(function(err, userinfo) {
    if (err) res.status(500).send(err);
    else {
      if(req.body.password==userinfo[0].password){
        res.status(200).json(userinfo);
      }else{
        res.status(500).send(err)
      } 
    }
  });
};

/* PUT an existing user */
const putExistingUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

/* GET user list */
const getAllUsers = (req, res) => {
  User.find(req).exec(function(err, users) {
    if (err) res.status(500).send(err);
    else res.status(200).json(users);
  });
};

/* POST a new user*/
const postNewUser = (req, res) => {
    User.create(req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};


/* DELETE an existing user */
const deleteExistingUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
};

module.exports = {
    getUserExists,
    putExistingUser,
    getAllUsers,
    postNewUser,
    deleteExistingUser
};