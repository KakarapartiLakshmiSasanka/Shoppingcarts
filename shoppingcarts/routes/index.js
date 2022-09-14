var express=require('express');
var router=express.Router();
var userController=require('../controllers/userController.js');
var groupController=require('../controllers/groupController.js');
var productController=require('../controllers/productController.js');

router.get('/api/categories',userController.getAll);
router.get('/api/groups',groupController.getAll);
router.get('/api/products',productController.getAll);
router.get('api/products/:id',productController.getById);
// router.get('/withcategories',groupController.getAllWithCategories);


module.exports=router;









// var express = require('express');
// var router = express.Router();
// const promise = require('bluebird'); // or any other Promise/A+ compatible library;

// const initOptions = {
//     promiseLib: promise // overriding the default (ES6 Promise);
// };

// const pgp = require('pg-promise')(initOptions);
// // See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// // Database connection details;
// const cn = {
//     host: 'localhost', // 'localhost' is the default;
//     port: 5432, // 5432 is the default;
//     database: 'shoppingcart',
//     user: 'postgres',
//     password: 'sa'
// };
// const db = pgp(cn); // database instance;


// router.get('/users',function(req,res,next){
 
//   db.any('SELECT * FROM Categories')
//     .then(function(data)  {
//       res.json({data:data});
       
//     })
//     .catch(function(error) {
//       res.error({error:error});
        
//     })
//     .finally(db.$pool.end)
//   });
// module.exports=router;
// router.post('/groups',function(req,res,next){
//   db.any('SELECT * FROM Groups')
//   .then(function(data){
//     res.json({data:data});
//   })
//   .catch(function(error){
//     res.error({error:error});
//   })
//   .finally(db.$pool.end)

// });



  





  // db.any('SELECT * FROM public."Categories"', [true])
  //   .then(data => {
  //     console.log('hi')
  //       console.log('DATA:', data); // print data;
  //   })
  //   .catch(error => {
  //       console.log('ERROR:', error); // print the error;
  //   })});

// db.any('SELECT * FROM public."Categories"')
//     .then(function(data)  {
//       res.json({data:data});
       
//     })
//     .catch(function(error) {
//       res.error({error:error});
        
//     })
//     .finally(db.$pool.end)});


// module.exports=router;





// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
