var express=require('express');
var jwt=require('jsonwebtoken');


var app=express();
app.get('/',(req,res)=>{
    res.json({
        message:"welcome to the api service"
    });
});

app.post('/api/post',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:"this isss...",
                authData
            })
        }
    })
});
app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        username:"sasanka",
        email:"sasi@gmail.com"
    }
    jwt.sign({user:user},"secretkey",(err,token)=>{
        res.json({
            token
        })
    })
})
function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!=="undefined"){
        const bearerToken=bearerHeader.split(" ")[1];
        req.token=bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}
app.listen(3000,()=>console.log("server is started"));