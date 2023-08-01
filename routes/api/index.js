const router = require('express').Router();
const watchRoutes = require('./watchRoutes');
const randomRoutes = require('./randomRoutes');
const { getWatchByBrand, getAllBrands } = require('../../controllers/itemController');

router.use('/watches', watchRoutes);

router.use('/random', randomRoutes)

router.route('/brand').get(getAllBrands);

router.route('/brand/:brand').get(getWatchByBrand);

module.exports = router;