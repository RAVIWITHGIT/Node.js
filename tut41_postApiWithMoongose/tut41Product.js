const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    quentity:Number,
    category:String
})

const prodcutModel = mongoose.model('try',ProductSchema)

module.exports = prodcutModel;