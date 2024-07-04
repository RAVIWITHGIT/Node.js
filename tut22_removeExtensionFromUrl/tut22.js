/* ******************* remove Extension from url and 404 page
1. remove extension from url --> mean in privious if you run any file then write like this http://localhost:5000/about.html , but here we can require extension like .html or other for run file http://localhost:5000/about

2. also discuss how to make 404 page
*/


const express = require("express")
const path = require('path')
const app = express()


const publicpath = path.join(__dirname,'public')
console.log(publicpath)

app.get("/",(_,res)=>{
    res.sendFile(`${publicpath}/home.html`)
})

app.get("/about",(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})

app.get("/contact",(_,res)=>{
    res.sendFile(`${publicpath}/contact.html`)
})

//404 page show
app.get("*",(_,res)=>{
    res.sendFile(`${publicpath}/404page.html`)
})



app.listen(5000)