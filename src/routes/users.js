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
  deleteaBookFromWish,
  sendResetPassEmail,
  checkValidUser,
  resetPassword,
  verifyEmail,
  validateUser,
} = require("../controllers/users");

router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.post("/forgot-password", sendResetPassEmail);
router.post("/token-check", checkValidUser);
router.post("/reset-password", resetPassword);

router.post("/verify-email", verifyEmail);
router.post("/validate-user", validateUser);

router.post("/googleFacebookSignIn", googleFacebookSignIn);
router.get("/profile/messages", auth, getRecentUsers);
router.get("/profile/:id", auth, getProfile);
router.patch("/profile", auth, editProfile);
router.patch("/profile/password", auth, changePassword);
router.post("/send-email", sendMail);
router.delete("/:id", auth, deleteaBookFromWish);

module.exports = router;
