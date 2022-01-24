const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    recipename:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    ingredients:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);