const express = require('express');
const prodcutModel = require('./tut41Product');
require('../tut41_postApiWithMoongose/tut41Confing')
const app = express();
app.use(express.json())


app.post('/addProduct', async (req,res)=>{
    const data = new prodcutModel(req.body)
    const result = await data.save()

    res.send(result)
})

app.get('/getProduct',async (req,res)=>{
    const result = await prodcutModel.find();
    res.send(result)
})

app.delete('/deleteProduct/:_id',async (req,res)=>{
    console.log(req.params)
    const result = await prodcutModel.deleteOne(req.params)
    res.send(result)

})

app.put('/updateProduct/:_id',async (req,res)=>{
    const result = await prodcutModel.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    res.send(result)
})

app.listen(8080,()=>{
    console.log("server run on port 8080 port")
})