const router = require('express').Router()
const {Statistic, Interval} = require('../db')

router.post('/', async (req, res, next) => {
    try {
        const intervals = await Interval.find()
        intervals.forEach(async interval => {
            const guess = req.body.guess - (req.body.guess % interval);
            const stat = await Statistic.findByGuess(interval.id, guess);
            if(stat) {
                stat.count++;
                await stat.save;
            }
            else {
                await Statistic.create({guess: guess, count: 1, interval: interval.id})
            }
        })
        res.status(201).send()
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
