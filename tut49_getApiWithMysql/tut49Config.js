const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mytest'
})

con.connect((err)=>{
    if(err){
        console.log('errro')
    }else{
        console.log('connect')
    }
})

module.exports = con;