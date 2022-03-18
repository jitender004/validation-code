const express = require("express");
// const mongoose = require("mongoose");
// const { body, validationResult } = require("express-validator");
const usersController = require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("/users", usersController); // http://localhost:5000/users will go to usersController

module.exports = app;





// app.use(express.json());

// const connect = () =>{
//     return mongoose.connect("mongodb://localhost:27017/validation");

// };

// const userschema = new mongoose.Schema({
//     first_name:{type:String , required:true},
//     last_name:{type:String , required:true},
//     email:{type:String , required:true},
//     pincode:{type:String , required:true},
//     age:{type:Number , required:true},
//     gender:{type:String , required:true},

// },
// {
//     versionKey: false,
//     timestamps: true,
// });

// const User = mongoose.model("user", userschema);

// app.post("/users", body("first_name").not().isEmpty().withMessage("First name must not be empty")
// .isLength({min:2}).withMessage("First Name must be at least 2 characters"),
//  async(req,res)=>{
//     try{
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors: errors.array() });
//         }
//         const user = await User.create(req.body);
//         return res.status(201).send(user);
//     }catch(err){
//         return res.status(500).send({err:err.message});
//     }
// });

// app.listen(5200, async()=>{
//     try{
//         await connect();
//         console.log("listing port on 5200");
//     }catch(err){
//         console.log(err);
//     }
  
   
// });