const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    ownerName:{
        type:String,
        required:true,
        minlength:[3,"Ownername must be at least 3 characters long"],
        maxlength:[20,"Ownername is limited to 20 chracters"],
    },
    name:{              //name of book
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[20,"name is limited to 20 chracters"],
    },
    subject:{           //subject -> Engineering subject
        type:String,  
        required:true 
    },
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
    price_type:{    //nogotitiable->Fixed, Negotiable, Price on call, Don
        type:String,
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
    tags:{
        type:String,  //tags for book 
        required:true
    },     
    
    edition:{           //edition of the book
        type:String,
    },
    description:String, //description of the book
    createdAt:{         //created At
        type:Date,
        default:Date.now()
    }
    
})

const Book = mongoose.model('Book',BookSchema)

module.exports = Book
