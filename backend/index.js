const express =require('express')
const PORT = 5000
const app=express()
const mongoose = require('mongoose')
const actorRoutes = require('./routes/actor')


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Movie actors")
 })
app.use('/actors',actorRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/moviestars',{

}).then(()=> console.log("DB connected"))
   .catch(err => console.error(err))

app.listen(PORT,()=>{
    console.log("Making api")
})
