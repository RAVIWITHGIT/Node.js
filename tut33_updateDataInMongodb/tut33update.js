const dbconnection = require("./tut33mongodb")

const updateData =async  ()=>{
    const myconnection = await dbconnection()

    //update one
    // const result = await myconnection.updateOne(
    //     {name:"shyam"},
    //     {$set:{
    //         name:"raja",
    //         from:"jodhpur",
    //         age:"2001"
    //     }}
    // )

    const result = await myconnection.updateMany(
        {name:"raja"},
        {$set:{
            name:"ram",
            from:"jodhpur",
            age:"2001"
        }}
    )
    console.log(result)


}

updateData()