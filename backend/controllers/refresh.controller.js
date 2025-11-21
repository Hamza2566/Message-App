import jwt from "jsonwebtoken"
import { generateAccessToken } from "../jwt/jwt.js";


export async function authrefreshToken(req,res) {
     const refreshToken = req.cookies.refreshToken; // comes from HttpOnly cookie

     if (!refreshToken) {return res.json("Refresh is empty")}

     const checkrefreshtoken = jwt.verify(refreshToken,process.env.REFRESH_JWT_SECRET)
     console.log("checking finished ",checkrefreshtoken);

     if (!checkrefreshtoken) {
        return res.json("the refresh token is expired sigin again")
     }
     const AccessToken = generateAccessToken(checkrefreshtoken)

     return AccessToken
}