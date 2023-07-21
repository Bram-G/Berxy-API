const router = require('express').Router();
const watchRoutes = require('./watchRoutes');

router.use('/watches', watchRoutes);

module.exports = router;