import express from "express";
import {
  wszyscy,
} from "./users.js";

const router = express.Router();

router.get("/all", wszyscy);

export default router;
