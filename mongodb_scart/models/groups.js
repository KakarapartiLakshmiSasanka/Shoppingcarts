const mongoose = require('mongoose');


const groupsSchema = new mongoose.Schema({
    name: String,
    description: String,
    isactive:Boolean,   
    createdAt:Date,
    updatedAt:Date
});

const Groups = mongoose.model('Groups', groupsSchema);

module.exports = Groups;
