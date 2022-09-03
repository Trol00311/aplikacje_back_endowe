import express from "express";
import {wszyscy,addTemp, temp } from "./api.js";

const router = express.Router();

router.get("/all", wszyscy);
router.get("/temp", temp);
router.post("/addTemp", addTemp);

export default router;
