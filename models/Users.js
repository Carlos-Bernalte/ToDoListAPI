var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  id: Number,
  name: String,
  contraseña: String,
  email: String,
  admin: Boolean,
  blocked: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);