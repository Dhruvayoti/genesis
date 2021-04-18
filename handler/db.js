const mongoose = require('mongoose')
let blog=mongoose.Schema({
    title : {
        type : String,
        required :true,
    },
    wname :{
        type : String,
        required :true,
    },
    p1t : {
        type : String,
        required :true,
    },
    p1 :{
        type : String,
        required :true,
    },
    p2t : {
        type : String,
        
    },
    p2 :{
        type : String,
        
    }
})
module.exports=mongoose.model('blogs', blog)