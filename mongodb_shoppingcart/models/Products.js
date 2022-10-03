const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: String,
    description: String,
    isactive:Boolean,
});

const product = mongoose.model('Proucts', groupSchema);
module.exports = product;
