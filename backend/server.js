require('dotenv').config()

const express = require("express");
const { default: mongoose } = require('mongoose');
const workoutsRoutes=require("./routes/workouts")
// express app

const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutsRoutes)

// connect to db means
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log('connected to db, listening on port ',process.env.PORT)
    })
})
.catch(()=>{
    console.log(error);
})

