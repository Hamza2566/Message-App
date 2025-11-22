import { authrefreshToken } from "../controllers/refresh.controller.js"
import express from "express"
import { addfriend } from "../helpers/quires.js"

const friendrequest = express.Router()



friendrequest.post("/:id",addfriend)






export default friendrequest