const express = require('express');
const dbconnection = require('./tut35Mongodb');
const app = express();


app.get('/', async (req,res)=>{
    let data = await dbconnection()
    data = await data.find().toArray();
    res.send(data)

})


app.listen(8080,()=>{
    console.log('server run with 8080 port')
})