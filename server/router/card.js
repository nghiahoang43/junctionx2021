import express from "express";
import { generateCard, getSingleCard } from "../controller/card.js";
const router = express.Router();

router.post("/create", generateCard);
router.get("/:_id", getSingleCard);

export default router;
