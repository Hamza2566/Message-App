
import express from "express"
import { getIncomingRequests, sendFriendRequest } from "../helpers/quires.js"
import { verifyToken } from "../controllers/auth.controller.js"

const friendrequest = express.Router()



friendrequest.post("/:id",verifyToken ,sendFriendRequest)
friendrequest.get("/",verifyToken,getIncomingRequests)






export default friendrequest