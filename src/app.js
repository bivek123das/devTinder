const express = require('express');

const app = express();

// how to handle multiple route hanlders
app.use("/user",(req,res,next)=>{
    console.log("Handling first route handlers!!!");
    next();
    // res.send("Response 1");  
},(req,res,next)=>{
    console.log("Handling second route handlers!!!");
    // res.send("Response 2");
    next();

},(req,res,next)=>{
    console.log("Handling third route handlers!!!");
    // res.send("Response 3");
    next();
},(req,res,next)=>{
    console.log("Handling fourth route handlers!!!");
    // res.send("Response 4");
    next();
},(req,res)=>{
    console.log("Handling fifth route handlers!!!");
    res.send("Response 5");
}
)


// listen the port 
app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 3000");
});