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

//allow Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'PUT', 'DELETE')
    res.header("Access-Control-Allow-Headers", 'Content-Type', 'Authorization')
    next();
  });
  
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




app.use("/api/v1/users", userRoute)
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/posts",postRoutes)

app.listen(8800,()=>{
    console.log("backend server is running")
})

