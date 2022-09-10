import express from "express";
import {addTemp, addUser, deleteUser, getUser, temp, wszyscy,login, getCytat,czat, addTo, addCzat, toDo, deleToDo, updateToDo} from "./api.js";

const router = express.Router();

router.get("/temp", temp);
router.post("/addTemp", addTemp);
router.get("/allUser", wszyscy);
router.get("/user", getUser);
router.delete("/deleteUser",deleteUser);
router.post("/addUser", addUser);
router.post("/logowanie", login);
router.get("/cytat/:id", getCytat)
router.get("/czat", czat)
router.post("/addCzat", addCzat)
 router.post("/addTo", addTo)
router.get("/toDo",toDo)
router.delete("/deleToDo/:id", deleToDo);
router.post("/updateToDo/:id",updateToDo)

export default router;
