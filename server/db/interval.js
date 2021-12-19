const mongoose = require('mongoose')

const Interval = mongoose.model(
  "Interval",
  new mongoose.Schema({
    time: Number
  }, {
    versionKey: false 
  })
);

module.exports = Interval;