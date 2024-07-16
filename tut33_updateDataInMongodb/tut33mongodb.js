const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const baseUrl = "OnlyTry"

const client = new MongoClient(url)


const dbconnection = async ()=>{
    let result = await client.connect()
    let db = result.db(baseUrl)
    return db.collection('try')


}

module.exports = dbconnection