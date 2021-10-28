var express = require('express');
var router = express.Router();
let val = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  val++;
  res.send(`User accesses are: ${val}`);
});

module.exports = router;
