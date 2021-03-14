const mongoose = require('mongoose')

const WishListSchema = mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
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
