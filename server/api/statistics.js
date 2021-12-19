const router = require('express').Router()
const {Statistic} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const stats = await Statistic.findAll()
        res.send(stats)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        
        const newStat = await Statistic.create({interval: req.body.interval, guess: req.body.guess, count: count++})
        res.status(201).send()
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
