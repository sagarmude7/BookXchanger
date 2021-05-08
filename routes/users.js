const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  signIn,
  signUp,
  googleFacebookSignIn,
  getProfile,
  editProfile,
  changePassword,
  sendMail,
  getRecentUsers,
} = require("../controllers/users");

router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.post("/googleFacebookSignIn", googleFacebookSignIn);
router.get("/profile/messages", auth, getRecentUsers);
router.get("/profile/:id", auth, getProfile);
router.patch("/profile", auth, editProfile);
router.patch("/profile/password", auth, changePassword);
router.post("/send-email", auth, sendMail);

module.exports = router;
