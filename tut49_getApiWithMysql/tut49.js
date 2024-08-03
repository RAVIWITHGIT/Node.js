const express = require('express');
const con = require('./tut49Config');
const app = express();
app.use(express.json())


app.get('/getMys',(req,res)=>{
    con.query('select * from users',(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

//********************** post api with mysql
app.post('/postMys',(req,res)=>{
    const data = req.body;
    con.query("INSERT INTO users SET ?",data,(error,result,field)=>{
        if(error){
            res.send(error)
        }
        res.send(result)
    })

})


//***************************  update api with mysql
app.put('/updateMys/:id',(req,res)=>{
    const data = [req.body.name,req.body.password,req.params.id]
    con.query("UPDATE users SET Name=?,Password=? where id = ?",data,(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.listen(8080,()=>{
    console.log('connect with server on port 8080 port')
})