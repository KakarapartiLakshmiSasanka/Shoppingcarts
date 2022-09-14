var Model=require('../models');
module.exports.getAll=function(req,res){
    Model.Groups.findAll()
    .then(function(users){
        res.send(users);
    })
}
// module.exports.getAllWithCategories = function (req, res) {
//     Model.Groups.findAll({ include: Model.Categories })
//       .then(function (groups) {
//         res.send(groups);
//       })
//   }
  
  