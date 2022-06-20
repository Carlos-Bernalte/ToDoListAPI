var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  priority: String,
  deadline: Date,
  project_id:Schema.Types.ObjectId,
});

module.exports = mongoose.model('Task', TaskSchema);