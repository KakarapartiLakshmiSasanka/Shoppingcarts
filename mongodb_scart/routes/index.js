var express=require('express');
var router=express.Router();

const Groupmodel = require('../models/Groups');
const Categorymodel = require('../models/Categories');
const productmodel = require('../models/products');

router.post('/product', (req, res) => {
    const cat = new productmodel(req.body);
    cat.save().then((cat) => {
        res.status(201).send(cat);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

// getting data freom database

router.get('/product', (req, res) => {

    productmodel.find({id:req.params._id}).then((cat) => {

        res.send(cat);

    }).catch((error) => {

        res.status(500).send(error);

    })

})




// creating category

//posting data in database

router.post('/category', (req, res) => {

    const Categorymodel = new Ga(req.body);

    cat.save().then((cat) => {

        res.status(201).send(cat);

    }).catch((error) => {

        res.status(400).send(error);

    })

})

// getting data freom database

router.get('/category', (req, res) => {

    Categorymodel.find({id:req.params._id}).then((cat) => {

        res.send(cat);

    }).catch((error) => {

        res.status(500).send(error);

    })

})





//creating Groups

//posting data in database

router.post('/groups', (req, res) => {

    const bla = new Groupmodel(req.body);

    bla.save().then((bla) => {

        res.status(201).send(bla);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

// getting data freom database

router.get('/groups', (req, res) => {
    Groupmodel.find().then((bla) => {
        console.log(bla);
        res.send(bla);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router;


// var groupController=require('../controllers/groupController.js');
// var productController=require('../controllers/categorycontroller.js');


//router.get('/api/groups',groupController.getAll);
//router.get('/api/products',categorycontroller.getAll);



//module.exports=router;








