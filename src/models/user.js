const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    lastName:{
        type: String,
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        trim: true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address :"+ value);
            }
        } 
    },
    password:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a Strong Password :"+ value);
            }
        } 
    },
    age:{
        type: Number,
        min:18,
        max:50
    },
    gender:{
        type: String,
        validate(value){
            if(![male,female,others].includes(value)){
                throw new Error("Gender data is not Valid");
            }
        }  
    },
    about:{
        type: String,
        default : "This is default about of the user!",
    },
    photoUrl:{
        type: String,
        default: "https://placeholderimagegenerator.com/wp-content/uploads/2024/12/Light-person-placeholder-image-portrait_png_.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Photo URL :"+ value);
            }
        } 
    },
    skills:{
       type: [String],
    },
},
{
  timespaces: true,
})

module.exports = mongoose.model("User",userSchema);