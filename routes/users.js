var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Hej');
});

module.exports = router;
