var express = require('express');
var router = express.Router();

// router.get('/groups', function(req, res, next) {
// 	db.any('SELECT * FROM Groups')
// 	.then(function(data){
// 	  res.json({data:data});
// 	})
// 	.catch(function(error){
// 	  res.error({error:error});
  
// 	})
// 	.finally(db.$pool.end)
   
//   });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
