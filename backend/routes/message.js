
import express from "express"
import { verifyToken } from "../controllers/auth.controller.js"
import { getmessages } from "../helpers/quires.js"

const message = express.Router()



message.get("/:id", verifyToken,getmessages)






export default message