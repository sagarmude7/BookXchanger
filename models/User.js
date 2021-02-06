const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[20,"name is limited to 20 chracters"],
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt :{
        type: Date(),
        default:Date.now(),
        required:true
    },
    updatedAt :{
        type: Date(),
        default:Date.now(),
        required:true
    },
    college:String,
    location:String,
    soldAds:Number
})

const User = mongoose.model('User',UserSchema)

module.exports = User