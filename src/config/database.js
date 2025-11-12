const mongoose= require("mongoose");


const connectDB = async()=>{
   await mongoose.connect("mongodb+srv://dad1234meena:Nodejs123@namastenode.xu3gfhb.mongodb.net/devTinder")
}

module.exports = connectDB;






