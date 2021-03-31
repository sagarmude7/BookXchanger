const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ownerName: {
    type: String,
    required: true,
  },
  wishListedBy: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
  ],
  isSold: {
    type: Boolean,
    default: false,
  },
  bookName: {
    //name of book
    type: String,
    required: true,
  },
  subject: {
    //subject -> Engineering subject
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  price: {
    //price of the book
    type: Number,
    required: true,
  },
  condition: {
    //condition of the book ->New or Used
    type: String,
    required: true,
  },
  priceType: {
    //nogotitiable->Fixed, Negotiable, Price on call, Don
    type: String,
    required: true,
  },
  mrp: {
    //MRP of book
    type: Number,
    required: true,
  },
  selectedFile: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  tags: [String], //tags for book
  noOfPages: {
    //no of pages in the book
    type: Number,
    required: true,
  },
  edition: {
    //edition of the book
    type: String,
    required: true,
  },
  description: String, //description of the book
  createdAt: {
    //created At
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    //created At
    type: Date,
    default: Date.now(),
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
