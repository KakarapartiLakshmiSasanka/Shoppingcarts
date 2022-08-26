var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize=require('sequelize');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'routes')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
// var index=require('./routes/index.js');
var index=require('./routes/index.js');
app.use('/',index);

