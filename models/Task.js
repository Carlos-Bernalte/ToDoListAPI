var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  priority: String,
  deadline: Date
});

module.exports = mongoose.model('Task', TaskSchema);