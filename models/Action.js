const mongoose = require("mongoose");

const ActionSchema = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }, { timestamps: true }
);

module.exports = mongoose.model("Action", ActionSchema);