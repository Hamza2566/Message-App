import express from "express"
import { signin, signup } from "../controllers/auth.controller.js"
import userValidation from "../helpers/validator.js"



const authrouter = express.Router()



authrouter.post("/signup",signup)
authrouter.post("/signin",userValidation,signin)





export default authrouter