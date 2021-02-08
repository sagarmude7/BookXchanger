const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    ownerName:{
        type:String,
        required:true,
        minlength:[3,"Ownername must be at least 3 characters long"],
        maxlength:[35,"Ownername is limited to 35 chracters"],
    },
    name:{              //name of book
        type:String,
        required:true,
        minlength:[3,"name must be at least 3 characters long"],
        maxlength:[35,"name is limited to 35 chracters"],
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
    },
    updatedAt:{         //created At
        type:Date,
        default:Date.now()
    }
    
})

module.exports.bookSchema = bookSchema;
module.exports.bookModel = mongoose.model('Book', bookSchema);

 