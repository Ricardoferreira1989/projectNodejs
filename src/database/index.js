/*Conexão com o banco de dados*/ 
const mongoose = require('mongoose')

const URL = "mongodb+srv://ricardoFerreira:u1d2t3@cluster0-gwyvr.gcp.mongodb.net/test2?retryWrites=true&w=majority"

mongoose.connect(URL, { useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex: true } ).then(() => {
    console.log("Your database server has been connected")
})

mongoose.Promise = global.Promise


module.exports = mongoose