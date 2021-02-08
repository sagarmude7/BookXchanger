const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[20,"name is limited to 20 chracters"],
    },
    firstName:{
        type:String,
        required:true,
        minlength:[1,"name must be at least 3 characters long"],
        maxlength:[20,"name is limited to 20 chracters"],
    },
    lastName:{
        type:String,
        required:true,
        minlength:[1,"name must be at least 3 characters long"],
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
    college:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    soldAds:Number,
    listedAds:Number
})

const User = mongoose.model('User',UserSchema)

module.exports = User