var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('posts', function(req, res, next){
  res.render('posts.html', { title: 'Express'});
});

//Show me hello world
// router.get('/hello', function(res, req, next){
//   res.render('hello', {title: 'Hello!'});
// });

module.exports = router;
