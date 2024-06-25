/* ****************************** create and display file from folder *****************************
1.here i use fs module for crete a file
2. also get path where we want create file using path module

*/

const fs = require("fs")

const path = require("path")
// console.log(path)
const dirpath = path.join(__dirname,"files")

//create file in files folder
for(let i=0; i<5; i++){
    fs.writeFileSync(`${dirpath}/hello${i+1}.txt`,`this is hello${i+1} file`)
}

//read file in files folder
// fs.readdir(dirpath,(err,files)=>{
//     console.log(files)
// })

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((value)=>{
//         console.log(value)
//     })
// })