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

app.listen(8080,()=>{
    console.log("server run on port 8080 port")
})