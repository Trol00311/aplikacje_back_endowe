import express from "express";
import {addTemp, addUser, deleteUser, getUser, temp, wszyscy,login, getCytat} from "./api.js";

const router = express.Router();

router.get("/temp", temp);
router.post("/addTemp", addTemp);
router.get("/allUser", wszyscy);
router.get("/user", getUser);
router.delete("/deleteUser",deleteUser);
router.post("/addUser", addUser);
router.post("/logowanie", login);
router.get("/cytat/:id", getCytat)

export default router;
