const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  id: Number,
  name: String,
  review: String,
  rating: Number,
  area: String,
  profile: String
});

module.exports = mongoose.model('Review', ReviewSchema, 'Reviews');