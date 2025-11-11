const express = require('express');
const User = require("./models/user");
const connectDB = require("./config/database");

const app = express();


app.post("/signup", async (req,res)=>{

  // create a new instance of the User model
   const user = new User({
    firstName:"Bhaskar",
    lastName: "Das",
    email:"das123bhaskar@gmail.com",
    password:"fdqw1r1",
    age:26,
    gender:"male",
   });

   try{
    await user.save();
    res.send("User Added Successfully!");
   }
   catch(err){
    res.status(400).send("Error saving the user:" +err.message);
   }
})


connectDB().then(()=>{
   console.log("Database connection established... ");

   // listen the port 
   app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 7777");
});
}).catch((err)=>{
    console.log("Database cannot be connected!!... ");
})






