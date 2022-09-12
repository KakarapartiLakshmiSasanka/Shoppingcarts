const mongoose=require('mongoose');


var Groups=mongoose.model('Groups',{
    name:{type:String,default:null},
    description:{type:String,default:null},
    isactive:{type:Boolean}

});
module.exports={Groups};