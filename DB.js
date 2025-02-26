//require mongoose
const mongoose = require('mongoose');



function connectDB() {
    mongoose.connect("mongodb://localhost:27017/").then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.log("error:",err)    
    })
}

module.exports=connectDB