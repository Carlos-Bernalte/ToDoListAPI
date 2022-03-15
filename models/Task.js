var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  id: Number,
  name: String,
  priority: Number,
  deadline: String
});

module.exports = mongoose.model('Task', TaskSchema);