/***************************  how get query params data using get api
 * 
 * we run get api like local http://localhost:5000/ then we add some data like ?name=ravi , so this is query params . so see hole url like http://localhost:5000/?name=ravi
 * we get query data using query.name because query store a object which see like this {name:"ravi"}
*/

const express = require('express')
const app = express();

app.get('',(req,res)=>{
    console.log(req.query)
    res.send("name is "+req.query.name)

})

app.listen(5000,()=>{
    console.log("the server run on 5000 port")
})