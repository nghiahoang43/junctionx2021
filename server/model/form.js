import mongoose from "mongoose";

const formSchema = mongoose.Schema({
  title: String,
  cards: [String],
});

export const Form = mongoose.model("form", formSchema);
