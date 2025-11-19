import { body } from "express-validator"

  const userValidation = [
  body("username").isLength({min:5}),
  body("password").isLength({ min: 6 })
];

export default userValidation



