const mongoose = require('mongoose')
const { BookSchema} = require('./Book.js');
const { WishListSchema} = require('./WishList.js');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profilePic:String,
    email:{
        type:String,
        required:true
    },
    password:{
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
    books: [BookSchema]
})

const User = mongoose.model('User',UserSchema)

module.exports = User;
