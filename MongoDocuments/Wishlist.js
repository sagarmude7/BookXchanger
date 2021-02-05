const mongoose = require('mongoose')

const WishListSchema = mongoose.Schema({
    bookId:String,
    bookName:{
        type:String
    }
})

const WishList = mongoose.model('Book',BookSchema)

module.exports = WishList