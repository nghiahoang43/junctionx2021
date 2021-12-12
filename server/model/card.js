import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  label: String,
  type: String,
  isRequired: Boolean,
  options: [Object],
  form: {
    ref: "form",
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    default: null,
  },
});

export const Card = mongoose.model("card", cardSchema);
