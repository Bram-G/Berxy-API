const Item = require("../models/itemModel");

module.exports = {
  getItems(req, res) {
    Item.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(422).json(err));
  },
  getSingleItem(req, res) {
    Item.findOne({ _id: req.params.itemId })
      .select("-__v")
      .then((item) => !item
      ?res.status(404).json({ message: "No item found with this id!" })
      : res.json(item)
      )
      .catch((err) => res.status(422).json(err));
  },
};
