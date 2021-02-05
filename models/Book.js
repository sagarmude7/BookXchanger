const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    ownerName:String,
    name:{              //name of book
        type:String,
        required:true
    },
    subject:String,     //subject -> Engineering subject
    price:{     //price of the book
        type:Number,
        required:true
    },
    condition:{  //condition of the book ->New or Used
        type:String,
        required:true
    },
    type:{          //whether it is for-> Sell Or Exchange
        type:String,  
        required:true
    },
    negotiable:{    //nogotitiable->true or false
        type:Boolean,
        required:true
    },
    selectedFile:{
        type:String,  //upload photo of Book(currently only one)  
        required:true
    },
    MRP:{               //MRP of book
        type:Number,
        required:true
    },    
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags:[String],     //tags for book
    noOfPages:{         //no of pages in the book
        type:Number,
        required:true
    },
    edition:{           //edition of the book
        type:String,
        required:true
    },
    description:String, //description of the book
    createdAt:{         //created At
        type:Date,
        default:Date.now()
    }
    
})

const Book = mongoose.model('Book',BookSchema)

module.exports = Book
