/*************************************** dynamic page with ejs ********************************
1. here we discuss how to use for loop in html file
2. also discuss how to use comman file in other file
    
3. when you want run javascript in html then use symbol --> <%= javascript%>
4. when you want run html use this symbol --> <%- include(__filePath)%>

*/

const express = require('express')
const app = express()
app.set('view engine','ejs')

app.get("/profile",(req,res)=>{
    const data = {
        Name:"ravi lakshakar",
        Age:22,
        From:"bassi",
        lenguage:['python','c++','javascript','node js','bootstrap','css','html','mongodb']
    }
    res.render('profile',{data})
})

app.get("/login",(_,res)=>{
    res.render("login")
})

app.listen(8080,()=>{
    console.log("this server run on 8080 port")
})