/* ******************************* Route Level MiddleWare *************************************
1. MiddleWare Types
 .Application-level middleware
 .router-level middleware
 .error-handling middleware
 .built-in middleware
 .third-party middleware

2. in privious tutorial which is application-level middleware because this middleware apply on all route
3. if you want apply any specific route then you use route level middleware

*/


const express = require('express')
const app = express()
//second way middleware
const mymiddleware = require('./middleware')

//third way use middleware , then use two line in upper
const route= express.Router()
route.use(mymiddleware)




// const mymiddleware = (req,res,next)=>{
//     if(!req.query.age){
//         res.send("please provide your age")
//     }else if(req.query.age<18){
//         res.send("this is age not fullfilled from this content")
//     }else{
//         next()
//     }
// }

//add middleware in specific route
// app.get("/",(req,res)=>{
    
//     res.send("<h1>this is home page</h1>")
// })
// app.get("/about",mymiddleware,(req,res)=>{
    
//     res.send("<h1>this is about page</h1>")
// })
// app.get("/contact",mymiddleware,(req,res)=>{
    
//     res.send("<h1>this is contact page</h1>")
// })

// app.get("/blog",(req,res)=>{
    
//     res.send("<h1>this is blog page</h1>")
// })


//************use middleware in diffrent file and use in this file using require
// app.get("/",(req,res)=>{
    
//     res.send("<h1>this is home page</h1>")
// })
// app.get("/about",mymiddleware,(req,res)=>{
    
//     res.send("<h1>this is about page</h1>")
// })
// app.get("/contact",mymiddleware,(req,res)=>{
    
//     res.send("<h1>this is contact page</h1>")
// })

// app.get("/blog",(req,res)=>{
    
//     res.send("<h1>this is blog page</h1>")
// })


//********************** third way tu use middleware
app.get("/",(req,res)=>{
    
    res.send("<h1>this is home page</h1>")
})
route.get("/about",(req,res)=>{
    
    res.send("<h1>this is about page</h1>")
})
route.get("/contact",(req,res)=>{
    
    res.send("<h1>this is contact page</h1>")
})

app.get("/blog",(req,res)=>{
    
    res.send("<h1>this is blog page</h1>")
})

app.use("/",route)

app.listen(8080,()=>{
    console.log("this port run on 8080 port")
})
