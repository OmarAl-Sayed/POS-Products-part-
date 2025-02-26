// try {
    //     mongoose.connect(url)
    //     console.log("Connected to MongoDB")
    // }
    // catch (err) {
    //     console.log("error:", err)
    //     }





const mongoose = require("mongoose")
const express = require("express")
const router=express.Router()
const morgan = require("morgan")

const productRoutes = require("./routes/product")
const connectDB = require('./DB')
















 app = express();

app.use(express.json());
app.use(morgan("dev"))


app.use('/api/products',productRoutes)
   

    
app.listen(4050,()=>{
    console.log("Server is running on port " + 4050)
    connectDB()
})




