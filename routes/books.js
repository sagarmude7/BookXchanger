const { Router } = require("express");
const express = require("express");
const router = express.Router();
// const cors = require('cors')
const {
  getBooks,
  createBookAd,
  addToWishList,
  getWishList,
  showBookInfo,
  updateIsSold,
} = require("../controllers/books");
const auth = require("../middleware/auth");

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get("/all", getBooks);
router.get("/book/:bookId", auth, showBookInfo);
router.post("/add", auth, createBookAd);
router.patch("/:id/addWishList", auth, addToWishList);
router.patch("/:id/sold", auth, updateIsSold);

module.exports = router;
