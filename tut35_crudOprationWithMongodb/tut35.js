const express = require('express');
const dbconnection = require('./tut35Mongodb');
const app = express();
app.use(express.json())


app.get('/', async (req,res)=>{
    let data = await dbconnection()
    data = await data.find().toArray();
    res.send(data)

})

app.post('/', async (req,res)=>{
    let data = await dbconnection()
    let result = await data.insertOne(req.body)
    res.send({status:"001",result})
})


app.listen(8080,()=>{
    console.log('server run with 8080 port')
})