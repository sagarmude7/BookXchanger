const mongoose = require("mongoose");
const Book = require("../models/Book");
const User = require("../models/User");
const Blob = require('node-blob')
const Compress = require('compress.js')

const {postBookValidator} =require('../validators/joi-validator')
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log("Fetched All Books from backend");
    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).json({ msg: "No Book Found" });
  }
};

// exports.showBookInfo = async (req, res) => {
//   try {
//     const bookId = req.params.bookId;
//     const book = await Book.findById(bookId);
//     console.log("Got the info of a single book")
//     return res.status(200).json(book);
//   } catch (err) {
//     return res.status(404).json({ msg: "No Book Found" });
//   }
// };

exports.createBookAd = async (req, res) => {
  const book = req.body;
  const {error} = postBookValidator.validate(req.body)
  
  
  console.log(error)
  // console.log("getting current user")
  if (!req.userId) return res.status(403).json({ msg: "Unauthorized" });
  console.log("got current user")
  try {
    if(error){
        console.log("got an error"+error)
        return res.status(400).json({msg:error.details[0].message})
    }
    const {selectedFile} = req.body
    console.log("got selectedfile")
    console.log(selectedFile)

    const noOfPages = Number(book.noOfPages)
    const price = Number(book.price)
    const mrp = Number(book.mrp)
    console.log("Creatig new book")
    //new Book Object
    const newBook = new Book({
      ...book,
      noOfPages:noOfPages,
      price:price,
      mrp:mrp,
      owner: req.userId,
      wishListedBy: [],
      createdAt: new Date().toISOString(),
    });
    await newBook.save();

    console.log("update the currentUser by pushing new book id created into the user.postedBooks")
    const currentUser = await User.findById(req.userId);
    const books = currentUser.postedBooks;
    books.push(newBook._id);
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { postedBooks: books },
      { new: true }
    );
    updatedUser.save();

    console.log("Book added to database");
    return res.status(201).json({msg:"Added"});
  } catch (err) {
    console.log(err)
    return res.status(409).json({ msg: "Something went wrong on Server.."  });
  }
};

exports.addToWishList = async (req, res) => {
  //get book id
  const { id } = req.params;

  if (!req.userId) return res.status(403).json({ msg: "Unauthorized access" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ msg: `No Book with id:${id}` });

  try {
    const book = await Book.findById(id);
    const userId = book.wishListedBy.findIndex(
      (id) => id === String(req.userId)
    );

    if (userId == -1) {
      book.wishListedBy.push(req.userId);
      console.log("Book added To wishList");
    } else {
      book.wishListedBy = book.wishListedBy.filter(
        (id) => id !== String(req.userId)
      );
      console.log("Book Removed To wishList");
    }

    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    console.log("Book added To wishList");
    return res.json(updatedBook);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.updateIsSold = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { isSold: true },
      { new: true }
    );
    console.log("Book marked as sold");
    return res.json(updatedBook);
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.deleteaBook = async(req,res)=>{
    console.log("Starting Book deletion")
    const {id} = req.params;
    console.log(id);
    try{
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ msg: `No Book with id:${id}` });
    
      await Book.findByIdAndRemove(id)
      console.log("Book deleted successfully")
      return res.status(204).json({msg:"Book Deleted Successfully"})
    }catch(err){
      return res.status(500).json({ msg: "Something went wrong on Server.." });
    }
}

exports.editBook = async(req,res) =>{
  const {id} = req.params;
  const toUpDate = req.body;
  try{
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ msg: `No Book with id:${id}` });
    
    const updatedBook = await Book.findByIdAndUpdate(id,{...toUpDate,updatedAt:new Date().toISOString()},{new:true});
    return res.status(200).json(updatedBook);
  }catch(err){
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
}





// const options = {
//   maxSizeMB: 1,
//   maxWidthOrHeight: 1920,
//   useWebWorker: true
// }
// const imageFile = await imageCompression.getFilefromDataUrl(selectedFile,'book')
    // console.log(imageFile)
    // const imageFile = new Blob([selectedFile],{type: 'image/png;base64'})
    // console.log(imageFile.type)
    // console.log('originalFile instanceof Blob', imageFile instanceof Blob);
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
    // const compressedFile = await imageCompression(imageFile,options);
    // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob);
    // console.log(compressedFile)
    // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
