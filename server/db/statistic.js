const mongoose = require('mongoose')

const Statistic = mongoose.model(
  "Statistic",
  new mongoose.Schema({
    interval: Number,
    guess: Number,
    count: Number
  })
);

module.exports = Statistic;