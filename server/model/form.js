import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: String,
  cards: [mongoose.Schema.Types.ObjectId],
  isActive: Boolean,
  allCard: [],
});

export const Form = mongoose.model("form", formSchema);
