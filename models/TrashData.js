const mongoose = require("mongoose");

const TrashDataSchema = new mongoose.Schema(
  {
    trash_type: {
      type: String,
      required: true
    },
    trash_weight: {
      type: Number,
      required: true
    },
    input_date: {
      type: String,
      required: true
    }
  }, { timestamps: true }
);

module.exports = mongoose.model("TrashData", TrashDataSchema);