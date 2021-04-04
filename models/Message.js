const mongoose = require('mongoose')

const Messagechema = mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    content : {
        type:String,
        required:true
    },
    createdAt :{
        type: Date,
        default:Date.now(),
    },
    updatedAt :{
        type: Date,
        default:Date.now()
    }
})

const Message = mongoose.model('Message',Messagechema)

module.exports = Message;
