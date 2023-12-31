const Watch = require("../models/Watches");

module.exports = {
  getAllWatches(req, res) {
    Watch.find()
      .then((watches) => res.json(watches))
      .catch((err) => res.status(422).json(err));
  },
  getWatchById(req, res) {
    Watch.findOne({ _id: req.params.watchId })
      .select("-__v")
      .then((watch) =>
        !watch
          ? res.status(404).json({ message: "No item found with this id!" })
          : res.json(watch)
      )
      .catch((err) => res.status(422).json(err));
  },
  getRandomWatch(req, res) {
    Watch.aggregate([{ $sample: { size: 4 } }])
      .then((watch) => res.json(watch))
      .catch((err) => res.status(422).json(err));
  },
  getWatchByBrand(req, res) {
  Watch.find({ brand: req.params.brand })
    .then((watch) => res.json(watch))
    .catch((err) => res.status(422).json(err));
  },
  getRandomBrand(req, res) {
    Watch.aggregate([{ $sample: { size: 1 } }])
      .then((watchArray) => {
        const watch = watchArray[0];
        if (!watch) {
          return res.status(404).json({ error: 'No watches found in the database.' });
        }
        res.json({ brand: watch.brand });
      })
      .catch((err) => res.status(422).json(err));
  },
  getAllBrands(req, res) {
    Watch.distinct('brand')
      .then((brands) => res.json(brands))
      .catch((err) => res.status(422).json(err));
  },
};
