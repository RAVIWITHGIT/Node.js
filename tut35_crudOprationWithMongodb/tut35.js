const express = require('express');
const dbconnection = require('./tut35Mongodb');
const mongodb = require('mongodb')
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

app.put('/:name', async (req,res)=>{
    let data = await dbconnection();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({status:"001",result})
})

app.delete("/:id", async (req,res)=>{
    const data = await dbconnection();
    const result = await data.deleteOne({_id: new mongodb.ObjectId( req.params.id)})
    res.send(result)
})


app.listen(8080,()=>{
    console.log('server run with 8080 port')
})