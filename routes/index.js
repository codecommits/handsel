var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
// 	 res.sendFile(__dirname + '/views/index.html');
// });
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express and Jade' });
});

module.exports = router;
