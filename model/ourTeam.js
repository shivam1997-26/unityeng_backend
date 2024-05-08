const mongoose = require('mongoose')

const pathMaker = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
},{
    timestamps:true
})


module.exports = mongoose.model('ourTeam',pathMaker)