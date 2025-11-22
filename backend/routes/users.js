import express from "express"
import { getUsers } from "../helpers/quires.js"

const users = express.Router()



users.get("/",getUsers)






export default users