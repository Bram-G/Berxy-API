const router = require('express').Router();
const itemRoutes = require('./itemRoutes');

router.use('/items', itemRoutes);

module.exports = router;