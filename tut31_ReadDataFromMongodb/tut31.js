/* **************************************** Read Data From mongodb with create a comman connection file ***********************

*/


const dbconnection = require("./mongodb")




const main =async ()=>{
    let data = await dbconnection()
    data = await data.find({}).toArray()
    console.log(data)

}

main()