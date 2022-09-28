const express=require('express');
const http=require('http')
const app=express();
const shopping=require('../mongodb_scart/routes/index.js');
const PORT = 3001;
const server = http.createServer(express);

app.use(express.json());
app.use('/api',shopping);

server.listen(PORT,()=>console.log(`Server is listening to PORT ${PORT}`));

module.exports=app;












// var express = require('express');
// var path = require('path');
// var app = express();

// //var models=require('models');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'controllers')));
// app.use(express.static(path.join(__dirname,'models')));

// var catemodels=require('./models/categories.js');
// //var grpmodels=require('./models/groups.js');
// //app.use('/',models);
// //app.use('/',grpmodels);
// app.use('/',catemodels);

// // var index=require('./routes/index.js');
// //var index=require('./routes/index.js');

// app.listen(3000,()=>console.log('server is running at port:3000'));
// //app.use('/',index);

// module.exports = app;

