/***************************** CRUD WITH FILD SYSTEM *************************************

*/

const fs = require('fs')
const path = require("path")
// const dirpath = path.join(__dirname)
// console.log(dirpath)

const dirpath = path.join(__dirname,"crud")
const filepath = `${dirpath}/apple.txt`;


//*******create file 
// fs.writeFileSync(filepath,"this is simple text file")

//*******readfild 
//** without utf8
// fs.readFile(filepath,(err,item)=>{
//     console.log(item)
// })

// fs.readFile(filepath,"utf8",(err,item)=>{
//     console.log(item)
// })

//******* update
// fs.appendFile(filepath,"and add some data",(err)=>{
//     if(!err) console.log(" file is update")
// })

//******** rename file
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is update")
// })


//********** delete file
fs.unlinkSync(`${dirpath}/fruit.txt`)
