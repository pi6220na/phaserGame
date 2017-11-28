var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('JSnake', { title: 'Express' });   //was index  part1
});

module.exports = router;
