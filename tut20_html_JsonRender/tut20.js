/* ***********************************888 Render html and json
 */

const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send(`
        <h1>this is home page</h1>
        <a href="/about">go to about page</a>
        `)

})
app.get("/about",(req,res)=>{
    res.send(`
        <h1>this is about page</h1>
        <a href="/">go to home page</a>
        `)

})
app.get("/contact",(req,res)=>{
    res.send([
        {
            name:"ravi",
            from:"bassi"
        },
        {
            name:"shiv",
            from:"jaipur"
        },
    ])

})

app.listen(4000,()=>{
    console.log("server nun port 4000")
})