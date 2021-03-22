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
        console.log("COntroller" + bookId)
        const book = await Book.findById(bookId);
        console.log("Control" + book)
        return res.status(200).json(book);
    }
    catch(err){
        return res.status(404).json({msg:"No Book Found"})
    }
    // console.log(newWish.book.bookName)
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });

    return res.json(updatedBook);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.updateIsSold = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = req.body;
    if (!mongoose.Types.ObjectId.isValid(bookId))
      return res.status(404).json({ msg: `No Book with id:${bookId}` });

    const updatedIsSold = await Book.findByIdAndUpdate(bookId, book, {
      new: true,
    });

    return res.json(updatedIsSold);
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong on isSold" });
  }
};
