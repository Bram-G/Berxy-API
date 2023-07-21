const router = require('express').Router();

const {
    getAllWatches,getWatchById
} = require('../../controllers/itemController');

router.route('/').get(getAllWatches);

router.route('/:watchId').get(getWatchById);


module.exports = router;