const router = require('express').Router();

const {getRandomBrand, getRandomWatch} = require('../../controllers/itemController');

router.route('/watch').get(getRandomWatch);

router.route('/brand').get(getRandomBrand);

module.exports = router;