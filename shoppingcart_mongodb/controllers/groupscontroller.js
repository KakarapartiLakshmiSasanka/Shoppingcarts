const express=require('express');
var router=express.Router();


var{Groups, Groups}=require('../models/groupsmodel');

const app = require('../app.js');

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
//         return res.status(400).send('No record with given id: ${req.params.id}')
module.exports=router;
