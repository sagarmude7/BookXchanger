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
    bookName:{              //name of book
        type:String
    },
    subject:{           //subject -> Engineering subject
        type:String 
    },
    price:{     //price of the book
        type:Number
    },
    selectedFile:{
        type:String
    },
    
    tags:[String], 
    
    edition:{           //edition of the book
        type:String
    },
    description:String, //description of the book
})


const WishList = mongoose.model('WishList',WishListSchema)

module.exports.WishListSchema = WishListSchema
module.exports.WishList = WishList
