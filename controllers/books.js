const { response } = require('express')
const mongoose = require('mongoose')
const {Book} = require('../models/Book')
const User = require('../models/User')
const { WishList } = require('../models/WishList')

exports.getBooks = async(req,res)=>{
    try{
        const books = await Book.find()
        return res.status(200).json(books)
    }
    catch(err){
        return res.status(404).json({msg:"No Book Found"})
    }
}

exports.showBookInfo = async(req,res)=>{ 
    console.log("IN Controller")
    try{
        const bookId = req.params.bookId;
       
        const book = await Book.findById(bookId);
        console.log("Control" + book)
        return res.status(200).json(book);
    }
    catch(err){
        return res.status(404).json({msg:"No Book Found"})
    }
}





exports.createBookAd = async(req,res)=>{
    const book = req.body
    
    //getting current user
    if(!req.userId)
        return res.status(403).json({msg:"Unauthorized"})
    try {
        //new Book Object
        const newBook = new Book({...book,wishListedBy:[],createdAt:new Date().toISOString(),owner:req.userId})
        await newBook.save()

        //update the currentUser by pushing new book created into the user.books
        const currentUser = await User.findById(req.userId);
        const books = currentUser.books;
        books.push(newBook)
        const updatedUser = await User.findOneAndUpdate({_id:req.userId},{books:books},{new:true})
        updatedUser.save()    
        
        console.log("Book added")
        return res.status(201).json(newBook)
    } catch (err) {
        return res.status(409).json({msg:err})
    }
}

exports.addToWishList = async(req,res)=>{
    // console.log("Hello")
    //get book id
    const {id} = req.params;
    

    if(!req.userId)
        return res.status(403).json({msg:"Unauthorized access"})

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({msg:`No Book with id:${id}`})
    // console.log("HEllo again")
    try{
        
        const book = await Book.findById(id)
        const userId = book.wishListedBy.findIndex(id=>id===String(req.userId))
       

        if(userId==-1){
            book.wishListedBy.push(req.userId)
            const newWish = new WishList({book:id,bookName:book.bookName,selectedFile:book.selectedFile,price:book.price,wishListedBy:book.wishListedBy,description:book.description,tags:book.tags,adder:req.userId,createdAt:new Date().toISOString()})
            newWish.save()
            console.log("WishList")
        }else{
            await WishList.findOneAndDelete({book:id,adder:req.userId},()=>console.log("removed"))
            book.wishListedBy = book.wishListedBy.filter(id=>id!==String(req.userId))
        }
        // console.log(newWish.book.bookName)
        const updatedBook = await Book.findByIdAndUpdate(id,book,{new:true})

        return res.json(updatedBook);
    }catch(err){
        return res.status(500).json({msg:"Something went wrong on Server.."})
    }
}


// exports.soldBook = (req,res)=>{
//     const currentUser = 
// }

// exports.getUserBooks = async(req,res)=>{
//     try {
//         const currentUser = await User.findById(req.userId);
//         return res.status(200).json({books:currentUser.books})
//     } catch (error) {
        
//     }
// }