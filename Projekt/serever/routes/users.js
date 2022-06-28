import express from "express"
import {
	getUser,
	allUsers,
	removeUser,
	addUser,
	modernizeUser,
	blog,
	addBlog,
	addChat,
	allChat,
	login,
} from "../controllers/users.js"

const router = express.Router()

router.post("/addUser", addUser)
router.get("/user/:id", getUser)
router.delete("/delete/:id", removeUser)
router.get("/all", allUsers)
router.post("/updateUser/:id", modernizeUser)
router.post("/addBlog", addBlog)
router.get("/blog", blog)
router.post("/addChat", addChat)
router.get("/allChat", allChat)
router.post("/login", login)

export default router
