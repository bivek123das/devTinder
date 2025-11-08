const express = require('express');

const app = express();

// GET => /users => middleware chain => request handlers

app.use("/",(req,res,next)=>{
    res.send("Handling / route");
})

app.get("/users",(req,res,next)=>{
     console.log("Handling /user route");
     next();
},(req,res,next)=>{
    res.send("1st Route handler");
    // next();
},(req,res,next)=>{
    res.send("2nd Route handler");
})



// listen the port 
app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 3000");
});