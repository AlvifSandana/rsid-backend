const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    
    photo: {
      type: String,
      required: false,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
