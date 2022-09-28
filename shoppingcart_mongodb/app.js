const express=require('express');
const bodyParser=require('body-parser');
const {mongoose}=require('./mongodb.js');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
const port=9000;
  
var groupscontroller=require('./controllers/groupscontroller.js');

// const { API_PORT } = process.env;
// const port = process.env.PORT || 4001;

var app=express();
var mongodb=require('./mongodb.js');

app.use(bodyParser.json());
app.listen(port, function() {
    console.log(`Server is listening on ${port}!`)
  })
// app.listen(9000,()=>console.log('server is running at port:9000'));
app.use('/groups',groupscontroller);







// // var express = require('express');
// // var path = require('path');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');

// // var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');

// // var app = express();

// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);

// // module.exports = app;
