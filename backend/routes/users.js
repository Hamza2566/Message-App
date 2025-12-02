import express from "express"
import { getUsers } from "../helpers/quires.js"
import { verifyToken } from "../controllers/auth.controller.js"

const users = express.Router()



users.get("/",verifyToken,getUsers)






export default users