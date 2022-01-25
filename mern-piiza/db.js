const mongoose = require("mongoose");
var mongoURl = 'mongodb+srv://crudproject:crudproject@cluster0.ffqoy.mongodb.net/mern-pizza?retryWrites=true&w=majority'

mongoose.connect(mongoURl, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Connection Successfull')
})

db.on('error', ()=>{
    console.log('mongo Db Connection failed');
})

module.exports = mongoose