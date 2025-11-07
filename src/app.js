const express = require('express');

const app = express();


// handling the request and send response

// this route only handle the GET call  to /user
app.use("/user",(req,res)=>{
    res.send("HAHAHAHAHAHA")
}
)
app.get("/user",(req,res)=>{
    res.send({firstName:"Bivek",lastName:"Das"}); 
})

app.post("/user",(req,res)=>{
    //saving data to DB
    res.send("Data successfully save to the database!"); 
})

app.delete("/user",(req,res)=>{
    //saving data to DB
    res.send("Deleted successfully!"); 
})

// this will match all the HTTP Method API calls to /test
app.use("/test",(req,res)=>{
res.send("Hello from the server");
});

// app.use("/namaste", (req, res) => {
//     res.send("namaste!!");
// });

// app.use('/',(req,res)=>{
//     res.send("HelloWorld from the Dashboard!");
// });

// listen the port 
app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 3000");
});