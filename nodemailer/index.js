var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

require('dotenv').config();

var nodemailer=require('nodemailer');
app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/prog.html');
    });
    
        
    app.post('/', urlencodedParser, (req, res) => {
        console.log('Got body:', req.body);
        res.sendStatus(200);
    });
    

let transporter=nodemailer.createTransport({
    service:'sasankalakshmi1@gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'sasankasrinivas99@gmail.com',
        pass:'tomsqvhmvtjoznxj'
    }
});

let mailOptions={
    from:'sasankalakshmi1@gmail.com',
    to:'mahshaik3@gmail.com',
    subject:'hey mahimood how r u doing????',
    message:'this is email'

};
transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log('error is present:',err);
    }
    else{
        console.log('Email sent succesfully');
    }
});
app.listen(3000); 







