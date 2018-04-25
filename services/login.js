var express = require('express');
var router = express.Router();
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post('/', (req, res, next) => {
  User.findOne({
    firstName: req.body.username
  }, (err, user) => {
    if (err) return next(err);
    res.json({
      token: jwt.sign({
        name: user.firstName
      }, jwtSecret)
    });
  });
});

module.exports = router;
