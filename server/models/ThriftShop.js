const mongoose = require('mongoose');

const ThriftShopSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "User must provide Item type"],
    },
    
    color:{
        type: String,
        required: [true, "User must provide Item color"],
    },

    size:{
        type: String, 
        required: [true, "User must provide Item size"],
    },

    condition:{
        type: String,
        required: [true, "User must provide Item condition"],
    },

    description:{
        type: String,
        required: [true, "User must provide Item description"],
    },
    
    price:{
        type: Number,
        required: [true, "User must provide Item price"],
    }


}, {timestamps: true}) 

module.exports = (mongoose.model("ThriftShop", ThriftShopSchema ));