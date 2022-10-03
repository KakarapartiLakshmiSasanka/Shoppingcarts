const mongoose = require('mongoose');
const categoriesSchema = new mongoose.Schema({
    name:String,
    description:String,
    isactive:Boolean,
});
const category= mongoose.model('Categories', categoriesSchema);
module.exports = category;
