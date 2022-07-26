
var express = require('express');

var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var projectsRouter = require('./routes/projects');
var usersRouter = require('./routes/users');

var app = express();
var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  console.log('mymerndb connection successful'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/projects', projectsRouter);
app.use('/users', usersRouter);

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});

module.exports = app;