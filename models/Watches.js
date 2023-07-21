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
    mainImage:{
      type: Schema.Types.String,
    },
    images: {
      type: Schema.Types.Array,
      required: true,
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
