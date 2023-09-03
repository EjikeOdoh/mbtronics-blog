const mongoose = require("mongoose");

const { Schema, model, Types } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    tags: { type: [String] },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
