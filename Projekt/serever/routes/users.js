import express from "express"
import {
	getUser,
	allUsers,
	removeUser,
	addUser,
	modernizeUser,
} from "../controllers/users.js"

const router = express.Router()

router.post("/addUser", addUser)
router.get("/user/:id", getUser)
router.delete("/delete/:id", removeUser)
router.get("/all", allUsers)
router.post("/updateUser/:id", modernizeUser)

export default router
