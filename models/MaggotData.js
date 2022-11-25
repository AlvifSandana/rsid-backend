const mongoose = require("mongoose");

const MaggotDataSchema = new mongoose.Schema(
  {
    box_name: {
      type: String,
      required: true
    },
    initial_date: {
      type: String,
      required: true
    },
    initial_amount: {
      type: Number,
      required: true
    },
    harvest_date: {
      type: String,
      required: true
    },
    harvest_amount: {
      type: Number,
      required: true
    },
  }, { timestamps: true }
);

module.exports = mongoose.model("MaggotData", MaggotDataSchema);