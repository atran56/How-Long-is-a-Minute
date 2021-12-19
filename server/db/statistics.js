const mongoose = require('mongoose')


const Statistic = mongoose.model(
  "Statistic",
  new mongoose.Schema({
    guess: Number,
    count: Number,
    interval: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interval"
    }
  })
);

module.exports = Statistic;