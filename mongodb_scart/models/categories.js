var mongoose = require('mongoose');

//module.exports = mongoose => {

    var categoriesSchema = new mongoose.Schema({
        name:String,
        description:String,
        isactive:Boolean,
        createdAt:Date,
        updatedAt:Date
    });
    var categories=mongoose.model('Categories',categoriesSchema);
    module.exports=categories;



//const autoIncrement = require('mongoose-auto-increment');



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ItemSchema = new Schema({
//     name : {
//         type: String,
//         required : true
//     },
//     description : {
//         type : String,
//         required:true
//     },
//     isactive:{
//         type:Boolean
//     },
    
//         timestamps: {
            
//             createdAt: {
//                 type:Date
//                },
           
//             updatedAt: {
//                 type:Date
//             }
            
//         }
// });
// module.exports = mongoose.model('categories', ItemSchema);
// return categories;
//////////////////////////////////////////////////////////////////////
// module.exports =mongooseSchema => {
//     const newSchema = new Schema({
//         name: {
//             type: String
//         },
//         description: {
//             type: String
//         },
//         Isactive: {
//             type: Boolean
//         }
//     }, {
//         timestamps: {
//             createdAt: 'created_at',
//             updatedAt: 'updated_at'
//         }

//     });

//     //newSchema.plugin(autoIncrement.plugin, 'groups');

//     const categories = mongoose.model('mongooseSchema', newSchema);

//     return categories;

// };