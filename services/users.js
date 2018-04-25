var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/:username', (req, res, next) => {
  console.log(req.user);
  User.findOne({
    firstName: req.params.username
  }, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = router;
