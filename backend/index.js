const express =require('express')
const PORT = process.env.PORT||5000;
const app=express()
const mongoose = require('mongoose')
const actorRoutes = require('./routes/actor')
const MONGO_URI=process.env.MONGO_URI
require('dotenv').config()


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Movie actors")
 })
app.use('/actors',actorRoutes)

mongoose.connect(MONGO_URI,{

}).then(()=> console.log("DB connected"))
   .catch(err => console.error(err))

app.listen(PORT,()=>{
    console.log("Making api")
})
