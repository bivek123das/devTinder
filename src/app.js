const express = require('express');

const app = express();

app.use("/",(err,req,res,next)=>{
  if(err){
   // Log your error
   res.status(500).send("Something went wrong!!!");
  }
});

app.get("/getUserData",(req,res)=>{
  try{
    // Logic of DB call and get user data

    throw new Error("wwhwbw");
    res.send("User data send");
  }
  catch(err){
    res.status(500).send("some error contact support team");
  }

});




// listen the port 
app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 3000");
});