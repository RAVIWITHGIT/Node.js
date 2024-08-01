const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mytest'
});

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connect')
    }
})

con.query('select * from users',(err,result)=>{
    console.log("result",result)
})