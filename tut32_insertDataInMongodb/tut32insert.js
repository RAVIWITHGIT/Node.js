/* **************************** insert Data In Mongodb ****************************************

*/


const dbconnection = require("../tut31_ReadDataFromMongodb/mongodb")

const Myinsert = async ()=>{
    const db = await dbconnection()
    //************** insert one data
//     const result = await db.insertOne(
//         {name:"ram",from:"avad",age:"2000"}
// )

//******************  insert many data
const result = await db.insertMany([
    {name:"ram",from:"avad",age:"2000"},
    {name:"raman",from:"avad",age:"2000"},
    {name:"rama",from:"avad",age:"2000"}

]
)
    console.log(result)
}

Myinsert()