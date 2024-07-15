const dbconnection = require("../tut31_ReadDataFromMongodb/mongodb")

const main = async ()=>{
    let data = await dbconnection()
    data = await data.find({name: 'ravi lakshakakr'}).toArray()
    console.log(data)

}

main()