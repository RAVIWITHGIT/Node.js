const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:String,
    price:String,
    quentity:String,
    category:String
})

const prodcutModel = mongoose.model('try',ProductSchema)

module.exports = prodcutModel;