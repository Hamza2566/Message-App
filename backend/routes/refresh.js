import { authrefreshToken } from "../controllers/refresh.controller.js"
import express from "express"

const refreshroute = express.Router()



refreshroute.post("/refresh",authrefreshToken)






export default refreshroute