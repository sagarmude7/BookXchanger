const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    college:String,
    location:String,
    soldAds:Number,
    listedAds:Number
})

const User = mongoose.model('User',UserSchema)

module.exports = User