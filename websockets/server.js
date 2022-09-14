const express = require('express');
const http = require('http');
const WebSocket = require("ws");
const PORT = 3000;
const server = http.createServer(express);
const wss = new WebSocket.Server({server});

wss.on('connection',function connection(ws){
    ws.on('message',function incoming(message){
        console.log("Received: "+message);
        
        wss.clients.forEach(function each(client){
            if(client!==ws && client.readyState===WebSocket.OPEN)
            {
                client.send(JSON.stringify(message));
            }
        });
    });
});

server.listen(PORT,()=>console.log(`Server is listening to PORT ${PORT}`));





// const { json } = require('body-parser');
// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server })

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(data) {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         console.log('data %s', data);
//         client.send(JSON.stringify(data));
//         // client.send(data);
//       }
//     })
//   })
// })

// server.listen(port, function() {
//   console.log(`Server is listening on ${port}!`)
// })