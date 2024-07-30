/********************************** Event and Event Emitter ***********************************
1.here we discuss how to make event 
2. Event Emitter --> which produce Event


*/

const express = require('express')

//Event varaible name always in capital latter because Eventemitter is class and when we use class then we write first latter
const EventEmitter = require('events')
const app = express();
const event = new EventEmitter()

let count = 0;

event.on('countApi',()=>{
    count++;
    console.log('event called',count)
})

app.get("/",(req,res)=>{
    res.send("api called")
    event.emit('countApi') //event generate
})
app.get("/search",(req,res)=>{
    res.send("search api called")
    event.emit('countApi') //event generate
})
app.get("/find",(req,res)=>{
    res.send("find api called")
    event.emit('countApi') //event generate
})

app.listen(8080)