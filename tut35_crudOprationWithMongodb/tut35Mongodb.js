const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const databas = 'OnlyTry'
const client = new MongoClient(url)

const dbconnection = async ()=>{
    let result =await client.connect();
    let db =  result.db(databas)
    return db.collection('try')
}

module.exports = dbconnection