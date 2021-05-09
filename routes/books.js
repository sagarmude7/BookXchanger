const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBookAd,
  addToWishList,
  updateIsSold,
  deleteaBook,
  editBook,
} = require("../controllers/books");
const auth = require("../middleware/auth");

router.get("/all", getBooks);
router.post("/add", auth, createBookAd);
router.patch("/:id/addWishList", auth, addToWishList);
router.patch("/:id/sold", auth, updateIsSold);
router.delete("/:id", auth, deleteaBook);
router.patch("/:id", auth, editBook);

module.exports = router;
