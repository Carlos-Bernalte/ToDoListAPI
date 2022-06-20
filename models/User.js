var mongoose = require('mongoose');
// var passportLocalMongoose = require("passport-local-mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type : String , lowercase : true , unique: true , required: true, minlength: 3, maxlength: 10},
  password: String,
  email: String,
  admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);