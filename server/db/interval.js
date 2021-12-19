const mongoose = require('mongoose')

const Interval = mongoose.model(
  "Interval",
  new mongoose.Schema({
    time: Number
  })
);

module.exports = Interval;