'use strict';

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  }
});

userSchema.methods.name = function () {
  return this.firstName + ' ' + this.lastName;
}

userSchema.statics.findByEmail = function (email, callback) {
  return this.findOne({
    email: email
  }, callback);
}

module.exports = mongoose.model('User', userSchema);
