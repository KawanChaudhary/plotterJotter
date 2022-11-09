const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:admin@cluster0.aabzcip.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to Mongo Succesfully");
    })
}

module.exports = connectToMongo;