const mongoose=require('mongoose');
const groupSchema=new mongoose.Schema({
    name:String,
    description:String,
    isactive:Boolean
})


// const mongoose = require('mongoose');


// const groupSchema = new mongoose.Schema({

//     name:String,

//     description:String,
//     isactive:Boolean,

   
// });
//   const Group = mongoose.model('Groups', groupSchema);
//   module.exports=Group;