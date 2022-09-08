var Model=require('../models');
module.exports.getAll=function(req,res){
    Model.Categories.findAll()
    .then(function(users){
        res.send(users);
    })
}
