/* const MongoClient = require("mongodb").MongoClient;
//const mongoose = require('mongoose');
//const config = require("../config/app.sepc.json");

mongoose.connect('mongodb://localhost:27017/Shoppingcart', (err) => {

if (!err) {
    console.log('Successfully Connected to MongoDB')
}
else {
    console.log('Failed to Connect MongoDB  '+ err)
}

});

module.exports = mongoose; */