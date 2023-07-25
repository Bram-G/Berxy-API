const router = require('express').Router();
const watchRoutes = require('./watchRoutes');
const { getRandomWatch, getWatchByBrand } = require('../../controllers/itemController');

router.use('/watches', watchRoutes);

router.route('/random').get(getRandomWatch);

router.route('/:brand').get(getWatchByBrand);

module.exports = router;