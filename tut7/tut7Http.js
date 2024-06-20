const http = require("http")

http.createServer((req,res)=>{
    res.write("hello this is home page")
    res.end()
}).listen(4500)