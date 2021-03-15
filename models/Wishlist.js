const mongoose = require('mongoose')

const WishListSchema = mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    bookName:{              //name of book
        type:String,
        required:true
    },
    selectedFile:{
        type:String
    },
    price:{     //price of the book
        type:Number,
        required:true
    },
    description:String,
    tags:[String],
    adder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    addedAt:{
        type: Date,
        default: Date.now()
    }
})


const WishList = mongoose.model('WishList',WishListSchema)

module.exports.WishListSchema = WishListSchema
module.exports.WishList = WishList
