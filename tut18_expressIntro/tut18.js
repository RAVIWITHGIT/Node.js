const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send("this is main file")

})

app.get("/about",(req,res)=>{
    res.send("this is about file")
})

app.get("/contact",(req,res)=>{
    res.send("this is contact file")
})

app.listen(5000,()=>{
    console.log("the surver is running on port 5000")
})