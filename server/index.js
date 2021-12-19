const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
