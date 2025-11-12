const express = require('express');
const User = require("./models/user");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());

// dynamically send the data to db
app.post("/signup", async (req,res)=>{

  // create a new instance of the User model
   const user = new User(req.body);

   try{
    await user.save();
    res.send("User Added Successfully!");
   }
   catch(err){
    res.status(400).send("Error saving the user:" +err.message);
   }
})

// Get user by email
app.get("/user", async(req,res)=>{
    const userEmail = req.body.email;
    console.log(userEmail);
    try{
        const users = await User.find({email: userEmail});
       if(users.length === 0){
        res.status(404).send("User not found");
    }else{
        res.send(users);
    }
}
    catch(err){
        res.status(400).send("Something went wrong");
    }
})


// feed API - GET /feed all the user from the database
app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(404).send("Something went wrong");
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






