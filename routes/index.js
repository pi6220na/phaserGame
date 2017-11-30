var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('JSnakeTest', { title: 'Express' });   //was index  part1 JSnake
});

module.exports = router;
