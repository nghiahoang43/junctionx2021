import express from "express";
import { createCard } from "../controller/card.js";
const router = express.Router();

router.post("/create", createCard);

export default router;
