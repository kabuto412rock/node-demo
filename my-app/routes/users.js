var express = require('express');
var router = express.Router();

const db = require('../models');
const UserModel = db.User;
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const result = await UserModel.findAll();
  
  res.json({
    result
  })
});

module.exports = router;
