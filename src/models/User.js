const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  profilePic: String,
  resetPasswordToken: {
    type: String,
    default: "",
  },
  resetPasswordExpires: {
    type: String,
    default: "",
  },
  verifyEmailToken: {
    type: String,
    default: "",
  },
  verifyEmailExpires: {
    type: String,
    default: "",
  },
  postedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
