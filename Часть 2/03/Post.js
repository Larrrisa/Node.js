import mongoose from "mongoose";

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model("Post", Post);
