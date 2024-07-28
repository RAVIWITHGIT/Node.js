const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/OnlyTry').then(()=>{
    console.log("connect with mongodb")
}).catch((error)=>{
    console.log(error)
})