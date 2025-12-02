
import express from "express"
import { getFriends } from "../helpers/quires.js"
import { verifyToken } from "../controllers/auth.controller.js"

const friends = express.Router()



friends.get("/", verifyToken,getFriends)






export default friends