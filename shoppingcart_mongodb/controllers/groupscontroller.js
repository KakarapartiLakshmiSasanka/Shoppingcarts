const express=require('express');
var router=express.Router();
// var ObjectId=require('mongoose').Types.ObjectId;
// var bcryptjs=require('bcryptjs');
// var jwt=require('jsonwebtoken');
// var bcrypt = require("bcrypt");

var{Groups, Groups}=require('../models/groupsmodel');
// const { token } = require('morgan');
const app = require('../app');
//this is the route==localhost:3000/employees/
router.get('/',(req,res)=>{
    Groups.find((err,docs)=>{
        if(!err) 
        {
            res.send(docs);
        }
        else
        {
            console.log('Error is retriving employee:',+JSON.stringify(err,undefined,2));
        }
    });
});

// router.get('/:id',(req,res)=>{
//     //this objectid is for checking whether the given id is valid or not 
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id: ${req.params.id}');
//     Employee.findById(req.params.id,(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{
//             console.log('Error is Retriving employee:',+JSON.stringify(err,undefined,2));
//         }
//     });
// });

// router.put('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id: ${req.params.id}');
//     var emp={ 
//         name:req.body.name,
//         position:req.body.position,
//         office:req.body.office,
//         salary:req.body.salary,
//     };
//     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{
//             console.log('Error in updating employee:',+JSON.stringify(err,undefined,2));
//         }

//     }); 
// });
// router.delete('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id: ${req.params.id}');
//     Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{
//             console.log('Error is at removing the data:',+JSON.stringify(err,undefined,2));
//         }
//     });
// });
// router.post('/',(req,res)=>{
//         var emp=new Employee({
//         name:req.body.name,
//         position:req.body.position,
//         office:req.body.office,
//         salary:req.body.salary,
//         email:req.body.email,
//         password:req.body.password
    
//         });
//         emp.save((err,doc)=>{
//             if(!err){res.send(doc);}
//             else{
//                 console.log('Error is at saving the data:',+JSON.stringify(err,undefined,2));
//             }
//         });
//     });

module.exports=router;
