import express from "express"
import bodyParser  from "body-parser"
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use("/posts",postRoutes)





// to limit the size of images they client will send
app.use(bodyParser.json({limit: "30mb",extended:true}))

app.use(bodyParser.urlencoded({limit: "30mb",extended:true}))


// MongoDB connection added ==> 

const CONNECTION = process.env.MONGO_URL    

const PORT = process.env.PORT || 8080

mongoose.connect(CONNECTION).then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))).catch((e)=>console.log(e))
