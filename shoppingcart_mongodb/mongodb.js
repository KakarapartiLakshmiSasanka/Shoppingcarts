const mongoose = require('mongoose');
const {MONGO_URI}=process.env;

mongoose.connect('mongodb://localhost:27017/Shoppingcart',(err)=>{
    if(!err)
        console.log('MongoDB connection is successfully');
    else
        console.log('Error in Db connection:',+JSON.stringify(err, undefined,2));

});
module.exports=mongoose;
