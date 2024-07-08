/* ***************************** MiddleWare in node js ****************************************
1. MIddleWare use in route
2. using Middleware we can access req and res , and also we can modify req,res uisng middleware
3. in this tutorial we make middleware for validation age,
  I. if user use this url like --> http://localhost:8080 , mean not give age like this -->http://localhost:8080/?age=3 then give response "please enter your age"
  II. if user use this url like --> http://localhost:8080/?age=3 , then give response "you can not see this content". not access all route

*/

const express = require('express')
const app = express()

const reqfilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("please enter your age")
    }else if(req.query.age<18){
        res.send("you can not see this content")
    }else{
        next()

    }
}
app.use(reqfilter)


app.get("/",(req,res)=>{
    
    res.send("<h1>Home Page</h1>")
})
app.get("/user",(req,res)=>{
    res.send("<h1>User Page</h1>")
})

app.listen(8080,()=>{
    console.log('the surver run on port 8080 port')
})