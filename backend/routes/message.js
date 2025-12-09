
import express from "express"
import { verifyToken } from "../controllers/auth.controller.js"
import { getmessages, sendmessage } from "../helpers/quires.js"

const message = express.Router()



message.get("/:id", verifyToken,getmessages)
message.post("/:id",verifyToken,sendmessage)






export default message