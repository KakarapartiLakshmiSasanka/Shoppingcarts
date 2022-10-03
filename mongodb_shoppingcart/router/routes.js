const Group = require('../models/Groups');
const Category = require('../models/Categories');
const product = require('../models/Products.js');
const express = require("express");
var router = express.Router();

//posting the products
router.post('/product', (req, res) => {
    const categor = new product(req.body);
    categor.save().then((categor) => {
        res.status(201).send(categor);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

//getting products..
router.get('/product', (req, res) => {
    product.find({id:req.params._id}).then((categor) => {
        res.send(categor);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.post('/category', (req, res) => {
    const categor = new Category(req.body);
    categor.save().then((categor) => {
        res.status(201).send(categor);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.get('/category', (req, res) => {
    Category.find({id:req.params._id}).then((categor) => {
        res.send(categor);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.post('/groups', (req, res) => {
    const produc = new Group(req.body);
    produc.save().then((produc) => {
        res.status(201).send(produc);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.get('/groups', (req, res) => {
    Group.find().then((produc) => {
        console.log(produc);
        res.send(produc);
        
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router;
