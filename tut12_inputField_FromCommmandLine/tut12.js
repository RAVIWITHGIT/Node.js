/* ************************************* Input Field From command line *****************************
1.yahaan ham dekhenge ki input field mein se data ko kaise nikaalate hain
2. when we run a file , to run the file we have to give it a name and whaterver is written after that is considered as the input filed
3. Exa--> node tut12.js hello , here hello is input field of command line.we discuss how to get this input value
4. process.argv properties present in node.js which help to get data from input field of command line

*/

// console.log(process)


//write this and see console --> nodemon tut12.js hello
// console.log(process.argv)


//********** create a file , write like command --> node tut12.js sampel.txt 'this is sample txt'
// const fs = require("fs")
// fs.writeFileSync(process.argv[2],process.argv[3])



//this is input field we create and remove file
const fs = require("fs")


//write this command for create file --> node tut12.js add sampel.txt 'this is sample txt'
if(process.argv[2]=="add"){
    fs.writeFileSync(process.argv[3],process.argv[4])
}else if(process.argv[2]=="remove"){
    fs.unlinkSync(process.argv[3])
}else{
    console.log("wrong input")
}