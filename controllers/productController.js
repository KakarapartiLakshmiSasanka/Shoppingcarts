var Model=require('../models');
module.exports.getAll=function(req,res){
    Model.Product.findAll()
    .then(function(users){
        res.send(users);
    })
}
module.exports.findOne=function(req,res){
  Model.Product.getbyId
}