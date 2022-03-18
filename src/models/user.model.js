const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
        first_name:{type:String , required:true},
        last_name:{type:String , required:true},
        email:{type:String , required:true},
        pincode:{type:String , required:true},
        age:{type:Number , required:true},
        gender:{type:String , required:false,enum:["Male","Female","Others"],default:"Male",},
    
    },
    {
        versionKey: false,
        timestamps: true,
    });
    
    module.exports = mongoose.model("user", userschema);