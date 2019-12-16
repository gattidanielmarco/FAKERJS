var express = require('express');
var router = express.Router();
const poeti = require('../vettPoeti');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(poeti);
    console.log('V');
  res.render('index', { title: 'Express', poeti:poeti });
});

module.exports = router;
