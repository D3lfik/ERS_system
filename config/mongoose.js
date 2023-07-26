require('dotenv').config();
const mongoose = require('mongoose');
const DB = process.env.MONGODB;

mongoose.connect(DB).then(()=>{
    console.log('connected Successfull');
}).catch((err) =>console.log('no connection'+err));

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MonoDB"));
db.once('open',function(){
    console.log('connected to DATABASE :: MONGODB');
});

module.exports = db;