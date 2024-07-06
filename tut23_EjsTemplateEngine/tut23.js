/************************* Ejs Template Engine ******************************
1. Ejs Template Engine help to make dynamic page  
2. before use ejs module you should install ejs module from npm
3. it complesary that you make create a views folder and file extension is .ejs
*/

const express = require('express')
const app = express()
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    const data = {
        Name:"ravi lakshakar",
        Age:21,
        From:"bassi"
    }
    res.render('profile',{data})
})


app.listen(8080,()=>{
    console.log("this port run on 8080 port")
})