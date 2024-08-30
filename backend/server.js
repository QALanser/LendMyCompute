const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/DBConnection.js")
const userRoutes = require("./routes/userRoutes.js")
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js")
const cors = require('cors')



const app = express()
app.use(express.json()) // accept JSON file
app.use(cors())

dotenv.config() // helps to read the env file
connectDB() // IN config/db.js

app.get("/",function(req,res){
    res.send("API is running")
})

app.use("/auth",userRoutes)
// app.use("/community",communityRoutes)
// app.use("/message",messageRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT,console.log("Server Started on PORT ",PORT));
                
