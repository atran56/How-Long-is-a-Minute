const router = require("express").Router();

router.use('/statistics', require('./statistics'))
router.use('/intervals', require('./intervals'))

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
