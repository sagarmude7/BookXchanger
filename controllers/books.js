const { response } = require('express')
const mongoose = require('mongoose')
const {Book} = require('../models/Book')

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
    if(!req.userId)
        return res.status(403).json({msg:"Unauthorized"})
    // console.log(book);
    const newBook = new Book({...book,createdAt:new Date().toISOString()})
    // console.log(newBook)
    try {
        await newBook.save()
        console.log("Book added")
        return res.status(201).json(newBook)
    } catch (err) {
        return res.status(409).json({msg:err})
    }
}
