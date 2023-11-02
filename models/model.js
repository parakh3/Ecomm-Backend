const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price:{
        type:Number,
        default:100
    },
    category:{
        type:String
    },
    image:{
        type:String,
    },
   rating:{
    rate:Number,
    count:Number
   }
})

module.exports = mongoose.model('data', dataSchema)