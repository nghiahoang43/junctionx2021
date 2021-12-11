import express from "express";
import { getAllForm, getSingleForm } from "../controller/form";
const router = express.Router();

router.get("/", getAllForm);
router.get("/:_id", getSingleForm);

export default router;
