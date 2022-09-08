var Model=require('../models');
module.exports.getAll=function(req,res){
    Model.Product.findAll()
    .then(function(users){
        res.send(users);
    })
}
module.exports.getById=function(req,res){
  Model.Product.getBYId('SELECT * FROM Product WHERE id=$1',[id])
  .then(function(users){
    res.send(users);
  })
}