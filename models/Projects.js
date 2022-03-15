var mongoose = require('mongoose');
const task = require('./Task');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  deadline: [Number]
});

module.exports = mongoose.model('Project', ProjectSchema);