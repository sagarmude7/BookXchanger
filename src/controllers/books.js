const mongoose = require("mongoose");
const Book = require("../models/Book");
const User = require("../models/User");

const { postBookValidator } = require("../validators/joi-validator");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).json({ msg: "No Book Found" });
  }
};

exports.createBookAd = async (req, res) => {
  const book = req.body;
  const { error } = postBookValidator.validate(req.body);

  if (!req.userId) return res.status(401).json({ msg: "Unauthorized" });
  try {
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }

    const noOfPages = Number(book.noOfPages);
    const price = Number(book.price);
    const mrp = Number(book.mrp);

    const newBook = new Book({
      ...book,
      noOfPages: noOfPages,
      price: price,
      mrp: mrp,
      owner: req.userId,
      wishListedBy: [],
      createdAt: new Date().toISOString(),
    });
    await newBook.save();

    const currentUser = await User.findById(req.userId);
    if (!currentUser) return res.status(401).json({ msg: "Unauthorized" });
    const books = currentUser.postedBooks;
    books.push(newBook._id);
    await User.findByIdAndUpdate(
      req.userId,
      { postedBooks: books },
      { new: true },
    );

    return res.status(201).json({ msg: "Added" });
  } catch (err) {
    return res.status(409).json({ msg: "Something went wrong on Server.." });
  }
};

exports.addToWishList = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.status(401).json({ msg: "Unauthorized access" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ msg: `No Book with id:${id}` });

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: `No Book with id:${id}` });
    const userId = book.wishListedBy.findIndex(
      (uid) => uid === String(req.userId),
    );

    if (userId == -1) {
      book.wishListedBy.push(req.userId);
    } else {
      book.wishListedBy = book.wishListedBy.filter(
        (uid) => uid !== String(req.userId),
      );
    }

    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    return res.json(updatedBook);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.updateIsSold = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.userId) return res.status(401).json({ msg: "Unauthorized" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });

    const existing = await Book.findById(id);
    if (!existing)
      return res.status(404).json({ msg: `No Book with id:${id}` });

    if (String(existing.owner) !== String(req.userId)) {
      return res.status(403).json({ msg: "Forbidden" });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { isSold: true },
      { new: true },
    );
    return res.json(updatedBook);
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.deleteaBook = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.userId) return res.status(401).json({ msg: "Unauthorized" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });

    const existing = await Book.findById(id);
    if (!existing)
      return res.status(404).json({ msg: `No Book with id:${id}` });

    if (String(existing.owner) !== String(req.userId)) {
      return res.status(403).json({ msg: "Forbidden" });
    }

    await Book.findByIdAndDelete(id);
    return res.status(204).json({ msg: "Book Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.editBook = async (req, res) => {
  const { id } = req.params;
  const toUpDate = req.body;
  try {
    if (!req.userId) return res.status(401).json({ msg: "Unauthorized" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });

    const existing = await Book.findById(id);
    if (!existing)
      return res.status(404).json({ msg: `No Book with id:${id}` });

    if (String(existing.owner) !== String(req.userId)) {
      return res.status(403).json({ msg: "Forbidden" });
    }

    // Prevent ownership / wishlist tampering through edit
    const { owner, wishListedBy, _id, ...safeUpdate } = toUpDate;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { ...safeUpdate, updatedAt: new Date().toISOString() },
      { new: true },
    );
    return res.status(200).json(updatedBook);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};
