const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: String,
    description: String,
    isactive:Boolean,   
});

const products = mongoose.model('Products', ProductsSchema);

module.exports = products;
