const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBookAd,
  addToWishList,
  getWishList,
  updateIsSold,
} = require("../controllers/books");
const auth = require("../middleware/auth");

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get("/all", getBooks);
router.post("/add", auth, createBookAd);
router.patch("/:id/addWishList", auth, addToWishList);
router.patch("/:id/sold", auth, updateIsSold);
// router.get("/book/:bookId", auth, showBookInfo);

module.exports = router;
