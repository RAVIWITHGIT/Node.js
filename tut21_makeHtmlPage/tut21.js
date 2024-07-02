//*************************** how to make html page  *******************************************8

const express = require('express')
const path = require("path")
const app = express()


const manpath = path.join(__dirname,"public")

/*
using this code we access all html file which present in public folder. if you want access in url then writle like --> http://localhost:5000/about.html . it compalisary that you add .html extension for access html file
if you make root file then give name is index.html because in node index.html is root file
*/

app.use(express.static(manpath))



app.listen(5000,()=>{
    console.log("this port run on 5000 port")
})