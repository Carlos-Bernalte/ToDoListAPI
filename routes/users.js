var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router
.put('/:username', userController.getUserExists)
.put('/:id', userController.putExistingUser)
.get('/', userController.getAllUsers)
.post('/', userController.postNewUser)
.delete('/:id', userController.deleteExistingUser);

module.exports = router;
