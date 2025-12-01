
import express from "express"
import { verifyToken } from "../controllers/auth.controller.js"
import { addFriend } from "../helpers/quires.js"

const friendAccept = express.Router()



friendAccept.put("/:id",verifyToken ,addFriend)






export default friendAccept