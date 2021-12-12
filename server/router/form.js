import express from "express";
import {
  updateForm,
  getAllForm,
  getSingleForm,
  createForm,
} from "../controller/form.js";
const router = express.Router();

router.post("/create", createForm);
router.post("/update", updateForm);
router.get("/", getAllForm);
router.get("/:_id", getSingleForm);

export default router;
