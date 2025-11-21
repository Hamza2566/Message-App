import jwt from "jsonwebtoken"






export function generateAccessToken(user) {
    const payload = {
  userId: user.id, 
  email: user.email,
};


   const AccessToken = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: "15m" })
   
   return AccessToken
}
export function generateRefreshToken(user) {
     const payload = {
  userId: user.id, 
  email: user.email,
};
const RefreshTOken = jwt.sign(payload,process.env.REFRESH_JWT_SECRET,{ expiresIn: "7d" })
return RefreshTOken
    
}