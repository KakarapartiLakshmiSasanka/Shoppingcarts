const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      port = 3090;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

// place holder for the data
let tasks = [
  {
    id: 1,
    task: 'task1',
    assignee: 'assignee1000',
    status: 'completed'
  },
  {
    id: 2,
    task: 'task2',
    assignee: 'assignee1001',
    status: 'completed'
  },
  {
    id: 3,
    task: 'task3',
    assignee: 'assignee1002',
    status: 'completed'
  },
  {
    id: 4,
    task: 'task4',
    assignee: 'assignee1000',
    status: 'completed'
  },
  
];

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.get('/api/todos', (req, res) => {
  console.log('api/todos called!!!!!')
  res.json(tasks);
});

app.post('/api/todo', (req, res) => {
   const task = req.body.task;
   task.id = randomId(10);
   tasks.push(task);
   res.json(tasks);
})

app.delete('/api/todo/:id', (req, res) => {
  console.log("Id to delete:::::", req.params.id)
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json(tasks);
})

app.put('/api/todos/:id', (req, res) => {
  console.log("Id to update:::::", req.params.id)
  const taskToUpdate = req.body.task;
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      task = taskToUpdate;
      task.id = parseInt(req.params.id);
    }
    return task;
});
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});






























// const express=require('express');
// const randomid=require('random-id');
// const bodyparser=require('body-parser');
// const http=require('http');
// const fs=require('fs');
// const port=3090;
// const server=http.createServer(express);
// const swaggerui=require('swagger-ui-express');
// const swaggerdocs=require('./swagger.json');
// const swaggercss=fs.readFileSync((process.cwd()+"/swagger.css"),'utf8');
// const app=express();

// let empldetails=[
//     {
//         empid:1,
//         name:'sasanka',
//         desingation:'Trainee',
//         Projectassigned:'no'
//     },
//     {
//         empid:2,
//         name:'lakshmi',
//         desingation:'Trainee',
//         Projectassigned:'no'

//     },
// ]

// app.use(bodyparser.json());
// app.use('/api/swagg',swaggerui.serve,swaggerui.setup(swaggerdocs,{swaggercss}));

// app.get('/api/getemployees',(req,res)=>{
//     console.log('apis are getting implimented');
//     res.json(empldetails);
// });

// app.post('/api/addNewEmployees',(req,res)=>{
//     const name=req.body.name;
//     name.empid=randomid(10);
//     empldetails.push(name);
//     res.json(empldetails);

// })

// app.delete('/api/deleteEmployee/:empid',(req,res)=>{
//     console.log("enter the id to delete",req.params.empid)
//     empldetails=empldetails.filter(name=>name.empid!=req.params.empid);
//     res.json(empldetails);

// });

// app.put('/api/updated/:empid',(req,res)=>{
//     console.log("Id that is needed to update",req.params.empid)
//     const employeeToBeUpdated=req.body.name;
//     empldetails=empldetails.map(name=>{
//         if(name.empid==req.params.empid){
//             name=employeeToBeUpdated;
//             name.empid=parseInt(req.params.empid);
//         }
//         return empldetails;
//     });
//     res.json(empldetails);
// });

// // app.get('/',(req,res)=>{
// //     res.send(`<h1> </h1>`)
// // })
// server.listen(port,()=>console.log(`Server is listening on PORT ${port}`));
