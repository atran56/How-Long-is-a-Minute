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

Statistic.findByIntervalId = async function(intervalId) {
    const stats = await this.find({interval: intervalId});
    return stats;
}

Statistic.findByGuess = async function(intervalId, guess) {
  const stat = await this.findOne({interval: intervalId, guess: guess});
  return stat;
}
module.exports = Statistic;