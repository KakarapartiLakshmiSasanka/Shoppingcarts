var express = require('express');
var router = express.Router();
const promise=require('bluebird');

const initOptions={
  promiseLib:promise
};
const pgp=require('pg-promise')(initOptions);
const cn={
  host:'localhost',
  port:5432,
  database:'shoppingcart',
  user:'postgres',
  password:'sa'
}
const db=pgp(cn);
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.any('SELECT * FROM shoppingcart.Categories',(err,res)=>{
    return console.log(res)
  })
  .then(function(data){
    res.json({data:data});
  })
  .catch(function(error){
    res.error({error:error});

  })
  .finally(db.$pool.end)
 
});

module.exports = router;











// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
