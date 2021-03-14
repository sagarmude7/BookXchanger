const { response } = require('express')
const mongoose = require('mongoose')
const {Book} = require('../models/Book')
const User = require('../models/User')
const { WishList } = require('../models/WishList')

exports.getBooks = async(req,res)=>{
    try{
        console.log("Geti books")
        const books = await Book.find()
        return res.status(200).json(books)
    }
    catch(err){
        return res.status(404).json({msg:"No Book Found"})
    }
}

exports.createBookAd = async(req,res)=>{
    const book = req.body
    console.log(req.userId)
    //getting current user
    if(!req.userId)
        return res.status(403).json({msg:"Unauthorized"})
    try {
        //new Book Object
        const newBook = new Book({...book,createdAt:new Date().toISOString(),owner:req.userId})
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
    console.log("Hello")
    //get book id
    const {id} = req.params;
    console.log(id);

    if(!req.userId)
        return res.status(403).json({msg:"Unauthorized access"})

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({msg:`No Book with id:${id}`})
    try{
        
        const book = await Book.findById(id);
        const currentUser = await User.findById(req.userId);
        const wishListItem = {
            book:book._id,
            adder:currentUser._id,
            bookName:book.bookName,
            subject:book.subject,
            price:book.price,
            selectedFile:book.selectedFile,
            tags:book.tags,
            edition:book.edition,
            description:book.description
        }
        const newWishList = await WishList.create(wishListItem)

        
        const wishList = currentUser.wishList;

        wishList.push(newWishList)

        //updated books array of User
        const updatedUser = await User.findOneAndUpdate({_id:req.userId},{wishList:wishList},{new:true})
        updatedUser.save();
        console.log(updatedUser)
        return res.status(200).json({liked:true})
    }catch(err){
        return res.status(500).json({msg:"Something went wrong on Server.."})
    }
    
}
