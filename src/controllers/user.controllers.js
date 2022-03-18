const express = require("express");
 const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.post(
  "/",
  body('email').isEmail().not().isEmpty()
  .custom(async(value)=>{
    const user = await User.findOne({email:value});
    if(user){
      throw new Error("Email Id is already Taken");
    }
    return true;
  }),
  body("first_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 2 })
    .withMessage("First Name must be at least 2 characters"),
    body("last_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("last Name cannot be empty")
    .isLength({ min: 2 })
    .withMessage("last Name must be at least 2 characters"),
    body("age")
    .bail()
    .not().isEmpty()
    .withMessage("age is madatory to fill")
    .isNumeric()
    .custom( (value) => {
      if(value<1 || value>100){
        throw new Error("valid age is between 1 to 100")
      }
      return true;
    }),
    body("pincode").not().isEmpty().withMessage("pincode mandatory to fill")
    .isNumeric().isLength({min:6 , max:6})
    .withMessage("pincode must be a 6 characters.."),
    body("gender").not().isEmpty().withMessage("gender is mandatory"),
   

 
  async (req, res) => {
    try {
     
      const errors = validationResult(req);
    
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;


