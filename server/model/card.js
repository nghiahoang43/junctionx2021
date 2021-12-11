import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  label: String,
  type: String,
  isRequired: Boolean,
  count: Number,
  options: [String],
});

export const Card = mongoose.model("card", cardSchema);
