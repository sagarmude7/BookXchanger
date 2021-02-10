const mongoose = require('mongoose')
const { bookSchema} = require('./Book.js');
const { WishListSchema} = require('./WishList.js');
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[35,"name is limited to 35 chracters"],
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
    Books: [bookSchema],
    WishList:[WishListSchema]
})

const User = mongoose.model('User',UserSchema)

module.exports = User;
