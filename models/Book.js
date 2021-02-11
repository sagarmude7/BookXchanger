const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    ownerName:String,
    bookName:{              //name of book
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[35,"name is limited to 35 chracters"],
    },
    subject:{           //subject -> Engineering subject
        type:String,  
        required:true 
    },
    branch:{
        type:String,
        required:true
    },
    subject:{
        type:String,     //subject -> Engineering subject
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
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    author:{
        type:String,
        required:true
    },
    tags:[String],     //tags for book
    noOfPages:{         //no of pages in the book
        type:Number,
        required:true
    },      
    noOfPages:Number,
    edition:{           //edition of the book
        type:String,
        required:true
    },
    description:String, //description of the book
    createdAt:{         //created At
        type:Date,
        default:Date.now()
    },
    updatedAt:{         //created At
        type:Date,
        default:Date.now()
    }
    
})

module.exports.bookSchema = bookSchema;
module.exports.bookModel = mongoose.model('Book', bookSchema);

 
