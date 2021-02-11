const mongoose = require('mongoose')

const WishListSchema = mongoose.Schema({
    bookId:String,
    adder:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name:{              //name of book
        type:String,
        required:true
    },
    subject:{           //subject -> Engineering subject
        type:String,  
        required:true 
    },
    price:{     //price of the book
        type:Number,
        required:true
    },
    selectedFile:{
        type:String,  //upload photo of Book(currently only one)  
        required:true
    },
    
    tags:{
        type:String,  //tags for book 
        required:true
    },    
    
    edition:{           //edition of the book
        type:String,
        required:true
    },
    description:String, //description of the book
})


const WishList = mongoose.model('WishList',WishListSchema)

module.exports.WishListSchema = WishListSchema
module.exports = WishList
