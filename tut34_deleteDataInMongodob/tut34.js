const dbconnection = require("../tut33_updateDataInMongodb/tut33mongodb")

const deleteData = async ()=>{
    let data = await dbconnection()
    // *********** delete one
    // let result = await data.deleteOne({name:"ram"})

    //********** delete many
    let result = await data.deleteMany({name:"raman"})
    console.log(result)
    if(result.deletedCount){
        console.log("delete successfully")
    }else{
        console.log("something is wrong")
    }

}

deleteData()