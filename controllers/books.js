const { response } = require('express')
const mongoose = require('mongoose')
const {Book} = require('../models/Book')
const { update } = require('../models/User')
const User = require('../models/User')

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
        console.log("Book 1")
        const newBook = new Book({...book,createdAt:new Date().toISOString(),owner:req.userId})
        
        //get current User
        const currentUser = await User.findById(req.userId);
        console.log("123")
        const books = currentUser.books;
        
        //pushing new Book to array
        books.push(newBook)
        
        //updated books array of User
        const updatedUser = await User.findOneAndUpdate({_id:req.userId},{books:books},{new:true})
        updatedUser.save()
        
        await newBook.save()
        console.log(newBook);
        console.log(updatedUser);
        console.log("Book added")
        return res.status(201).json(newBook)
    } catch (err) {
        return res.status(409).json({msg:err})
    }
}

exports.addToWishList = async(req,res)=>{
    console.log("Hello")
    const {id} = req.params;
    console.log(id);
    return res.status(200).json({msg:"Added To the wishlist from backend"})
}
