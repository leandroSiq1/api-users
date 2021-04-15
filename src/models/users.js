const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  photo: String
});

const Model = mongoose.model('users', schema);

module.exports = Model;