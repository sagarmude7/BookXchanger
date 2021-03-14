const { response } = require('express')
const mongoose = require('mongoose')
const {Book} = require('../models/Book')
const { update } = require('../models/User')
const User = require('../models/User')

exports.getBooks = async(req,res)=>{
    try{
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
        
        //get current User
        const currentUser = await User.findById(req.userId);
        const books = currentUser.Books;
        //pushing new Book to array
        books.push(newBook)
        //updated books array of User
        const updatedUser = await User.findOneAndUpdate({_id:req.userId},{Books:Books},{new:true})
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
