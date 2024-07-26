const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/OnlyTry').then(()=>{
    console.log("connect with mongodb")
}).catch((error)=>{
    console.log(error)
})

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    Category:String
})

const productModel = mongoose.model('try',productSchema)

//add data
const addInMongodb = async ()=>{
    let data = new productModel({name:"shop",price:200,brand:"unt",Category:"indian"})
    const result = await data.save();
    console.log(result)
}



// addInMongodb()

const updateInMongodb = async ()=>{
    let data = await productModel.updateOne(
        {name:"shop"},
        {
            $set:{price:700,name:"shampu"}
        }
    )
    console.log(data)
}

// updateInMongodb()

const deleteInMongodb = async ()=>{
    let data = await productModel.deleteOne({name:"shop"})
    console.log(data)
}

// deleteInMongodb()

const findInDb = async ()=>{
    const product = await productModel.find();
    console.log(product)
}
findInDb()