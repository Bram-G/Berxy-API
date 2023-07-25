const { Schema, model, Types } = require("mongoose");
const watchSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    brand: {
      type: Schema.Types.String,
    },
    mainImage:{
      type: Schema.Types.String,
    },
    image1: {
      type: Schema.Types.String,
    },
    image2: {
      type: Schema.Types.String,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const Watch = model("Watch", watchSchema);
module.exports = Watch;
