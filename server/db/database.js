// The sole purpose of this module is to establish a connection to your
// Mongo database by creating a mongoose instance (called `db`).

const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/minuteApp')

module.exports = db
