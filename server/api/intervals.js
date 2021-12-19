const router = require('express').Router()
const {Statistic, Interval} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const intervals = await Interval.find();
        res.status(200).send(intervals);
    }
    catch (error) {
        next(error);
    }
});

router.get('/:intervalId', async (req, res, next) => {
    try {
        const stats = await Statistic.findByIntervalId(req.params.intervalId);
        res.status(200).send(stats);
    }
    catch (error) {
        next(error);
    }
    })

module.exports = router
