import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cardRoute from "./router/card.js";
import formRoute from "./router/form.js";

config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Test");
});

app.use("/card", cardRoute);
app.use("/form", formRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
