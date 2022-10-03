require('./db/mongoose.js');
const express = require('express');
const http=require('http');
const app = express();
app.use(express.json());
var Cart=require('./router/routes.js');
const PORT = 4000;
const server = http.createServer(express);

app.use('/apiScart',Cart);

server.listen(PORT,()=>console.log(`Server is listening to PORT ${PORT}`));


module.exports = app;
