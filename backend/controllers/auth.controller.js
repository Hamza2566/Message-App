import { validationResult } from "express-validator";



export function signup(req,res) {
     res.json({ message: "HI from signup controller" })
}



export function  signin(req,res) {
     const errors = validationResult(req);
     console.log(errors.array);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             success: false,
//             errors: errors.array(),
//         });
//     }
     res.json({ message: "HI from signin controller" })
}