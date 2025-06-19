const express = require('express')
const PORT = 5002
const app = express()

app.get("/",(req,res) => {
    res.send("welcome")

})

app.get("/",(req,res)=>{
    const theId =res.params.id
    res.send(`The Id id :${theId}`)
})
app.listen(5002,()=>{
    console.log("Welcome to api")
})