const express = require('express');
const app  = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require("./routes/postRoutes")
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log('connected to MongoDb')
})


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




app.use("/api/users", userRoute)
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)

app.listen(8800,()=>{
    console.log("backend server is running")
})

