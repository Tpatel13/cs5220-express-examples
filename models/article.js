'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: new Date()
  },
  comments: {
    text: String,
    author: {
      id: Schema.Types.ObjectId,
      firstName: String,
      lastName: String
    },
    date: {
      type: Date,
      default: new Date()
    }
  },
  tags: [String]
});

module.exports = mongoose.model('Article', articleSchema);
