import express from "express"
import authrouter from "./routes/auth.js"
import dotenv from "dotenv"
const port = process.env.PORT || 3500 
import cors from "cors"


dotenv.config()
const app = express()
app.use(cors())

app.use(express.json())

app.use("/api/auth",authrouter)







app.listen(port,()=>{
    console.log(`server is up running on ${port}`);
})