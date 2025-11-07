const express = require('express');

const app = express();


// handling the request and send response

app.use("/test",(req,res)=>{
res.send("Hello from the server");
});

app.use("/namaste", (req, res) => {
    res.send("namaste!!");
});

app.use('/',(req,res)=>{
    res.send("HelloWorld from the Dashboard!");
});
// listen the port 
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000");
});