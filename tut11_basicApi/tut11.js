// const htttp = require('http');
const http = require('http')
const Data = require("./Data")

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(Data))
    res.end();
}).listen(5000)