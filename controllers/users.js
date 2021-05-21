const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Book = require("../models/Book");
const Message = require("../models/Message");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {
  regValidator,
  loginValidator,
  editValidator,
  changePasswordValidator,
  feedBackValidator,
} = require("../validators/joi-validator");

exports.signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    college,
    location,
    password,
    confirmPassword,
  } = req.body;
  console.log(password);
  const { error } = regValidator.validate(req.body);
  console.log(error);
  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res
        .status(400)
        .json({ msg: "User already exists with this email" });

    if (password != confirmPassword)
      return res.status(400).json({ msg: "Password don't match" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      college: college,
      location: location,
      postedBooks: [],
    });

    const payload = {
      email: newUser.email,
      id: newUser._id,
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "4h",
    });
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { verifyEmailToken: token, verifyEmailExpires: Date.now() + 300000 },
      { new: true }
    );
    updatedUser.save();
    const sender = "reply.bookxchanger@gmail.com";
    const subject = "BookXchanger Verify Email";
    const body =
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      req.headers.origin +
      "/verify-email/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: sender,
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
      }
    });
    console.log("New User created using sign Up");
    return res.status(200).json({profile: { name: newUser.name, email: newUser.email, id: newUser._id },token});
  } catch (err) {
    return res.status(500).json({ msg: "SomeThing went wrong" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  const { error } = loginValidator.validate(req.body);

  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const oldUser = await User.findOne({ email: email });

    if (!oldUser) return res.status(400).json({ msg: "User doesn't exist" });

    const isPasswordIncorrect = await bcrypt.compare(
      password,
      oldUser.password
    );

    if (!isPasswordIncorrect)
      return res.status(400).json({ msg: "Password Incorrect" });

    const token = jwt.sign(
      { profile: oldUser, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" }
    );
    console.log("User Signed In Normally");
    return res.status(200).json({
      profile: { name: oldUser.name, email: oldUser.email, id: oldUser._id },
      token,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.verifyEmail = async (req, res) => {
  const email = req.body.email;
  const payload = {
    email: email,
  };
  try {
    const oldUser = await User.findOne({ email: email });
    if (!oldUser)
      return res.status(400).json({ msg: "No user exists with this email" });

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "300000",
    });
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { verifyEmailToken: token, verifyEmailExpires: Date.now() + 300000 },
      { new: true }
    );
    updatedUser.save();
    const sender = "reply.bookxchanger@gmail.com";
    const subject = "BookXchanger Verify Email";
    const body =
      "Please verify your email by clicking the link below:\n\n" +
      req.headers.origin +
      "/verify-email/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email..\n";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: process.env.PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: sender,
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(infoq);
        console.log("Working");
      }
    });

    return res
      .status(200)
      .json({ msg: "An E-mail has been sent with further instructions" });
  } catch (err) {
    console.log(err);
  }
};
exports.validateUser = async (req, res) => {
  const newToken = req.body.token;
  console.log("My TOken : " + newToken);
  try {
    const oldUser = await User.findOne({ verifyEmailToken: newToken });
    console.log(oldUser);
    // const updatedUser = await User.findOneAndUpdate({email:email},{verifyEmailToken:token,verifyEmailExpires:Date.now()+300000},{new:true})
    // updatedUser.save()
    const token = jwt.sign(
      { profile: oldUser, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" }
    );
    console.log("User Signed In By Verifying Email");
    return res.status(200).json({
      profile: { name: oldUser.name, email: oldUser.email, id: oldUser._id },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.sendResetPassEmail = async (req, res) => {
  const email = req.body.email;
  const payload = {
    email: email,
  };
  try {
    const oldUser = await User.findOne({ email: email });

    if (!oldUser)
      return res.status(400).json({ msg: "No user exists with this email" });

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "300000",
    });

    console.log(oldUser.resetPasswordExpires, oldUser.resetPasswordToken);

    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { resetPasswordToken: token, resetPasswordExpires: Date.now() + 300000 },
      { new: true }
    );
    updatedUser.save();
    console.log(req.headers.origin);
    const sender = "reply.bookxchanger@gmail.com";
    const subject = "BookXchanger Password Reset";
    const body =
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      req.headers.origin +
      "/password-reset/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: sender,
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
      }
    });

    return res
      .status(200)
      .json({ msg: "An e-mail has been sent with further instructions" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.checkValidUser = async (req, res) => {
  console.log(req.body.token);
  try {
    const foundUser = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!foundUser)
      return res.status(400).json({ msg: "Password Token is inValid" });
    console.log(foundUser);
    return res
      .status(200)
      .json({ msg: "User and Token Validated successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.resetPassword = async (req, res) => {
  console.log(req.body);
  try {
    const foundUser = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!foundUser)
      return res.status(400).json({ msg: "Password Token is inValid" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const updatedUser = await User.findOneAndUpdate(
      { email: foundUser.email },
      {
        resetPasswordToken: "",
        resetPasswordExpires: "",
        password: hashedPassword,
      },
      { new: true }
    );
    updatedUser.save();

    console.log(updatedUser);
    return res.status(200).json({ msg: "Password reset successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

//utility function to generate a random password
function random_password_generate(max, min) {
  var passwordChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen)
    .fill(passwordChars)
    .map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");
  return randPassword;
}

exports.googleFacebookSignIn = async (req, res) => {
  const { email, name, profilePic } = req.body;
  // console.log(email)
  try {
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
      const password = random_password_generate(20, 10);
      // console.log(name);
      //siMrjVb44!QFG
      // console.log(password);
      const hashedPassword = await bcrypt.hash(password, 10);
      // console.log(hashedPassword)
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        profilePic,
        createdAt: new Date().toISOString(),
        college: "ABC",
        location: "DEF",
        postedBooks: [],
      });

      // console.log("newUser",newUser);
      const payload = {
        email: newUser.email,
        id: newUser._id,
      };

      await sendGoogleMail(email, name, password);
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "4h",
      });

      return res.status(200).json({
        profile: {
          name: newUser.name,
          email: newUser.email,
          profilePic: newUser.profilePic,
          id: newUser._id,
        },
        token,
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { profilePic: profilePic },
      { new: true }
    );

    updatedUser.save();
    const token = jwt.sign(
      { profile: updatedUser, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" }
    );

    console.log("User Signed In using Google");
    return res.status(200).json({
      profile: {
        name: updatedUser.name,
        email: updatedUser.email,
        profilePic: updatedUser.profilePic,
        id: updatedUser._id,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    console.log("Users Details Found");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.editProfile = async (req, res) => {
  const { name, email, college, location, profilePic } = req.body;
  const { error } = editValidator.validate(req.body);
  console.log("in cont", profilePic);
  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });
    const updateData = { name, email, college, location, profilePic };

    const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, {
      new: true,
    });

    console.log(updatedUser, "Profile Updated successfully!");
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.editProfile = async (req, res) => {
  const { name, email, college, location, profilePic } = req.body;
  const { error } = editValidator.validate(req.body);
  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });
    const updateData = { name, email, college, location, profilePic };

    const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, {
      new: true,
    });

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  const { error } = changePasswordValidator.validate(req.body);

  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const user = await User.findById(req.userId);
    const isPasswordcorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordcorrect)
      return res.status(400).json({ msg: "Password Incorrect" });

    if (newPassword != confirmPassword)
      return res.status(400).json({ msg: "Password don't match" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedPassword = { password: hashedPassword };

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      updatedPassword,
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.sendMail = async (req, res) => {
  const { error } = feedBackValidator.validate(req.body);
  try {
    if (error)
      return res
        .status(400)
        .json({ msg: error.details[0].message, severity: "error" });
    const receiver = "bookxchanger7@gmail.com";
    const message = req.body.message;
    const subject = `Feedback from ${req.body.name}`;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "reply.bookxchanger@gmail.com",
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: "reply.bookxchanger@gmail.com",
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
      } else {
      }
    });
    return res.status(200).json({
      msg: "Feedback sent successfully! \n Thank you for you Feedback",
      severity: "success",
    });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const sendGoogleMail = async (to, toName, password) => {
  try {
    const receiver = to;
    const message = `
            Welcome ${toName},Greetings from Bookxchanger!
            Your password generated is:${password}
            If you want to SignIn manually next time use it.
            You can change this password later by editing your profile.
        `;
    const subject = `${toName},your passward generated; `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "reply.bookxchanger@gmail.com",
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: "reply.bookxchanger@gmail.com",
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
      } else {
      }
    });
  } catch (err) {}
};

exports.sendChatMail = async (to, toName, fromName, url) => {
  try {
    const receiver = to;
    const message = `
            Dear ${toName}, 
            you have new messages waiting for you from ${fromName}:
            Please head over to chatbox: ${url} To chat now
        `;
    const subject = `Dear ${toName},you have new messages `;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "reply.bookxchanger@gmail.com",
        pass: "Book@123123",
      },
    });

    const mailOptions = {
      from: "reply.bookxchanger@gmail.com",
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
      } else {
      }
    });
  } catch (err) {}
};

exports.getRecentUsers = async (req, res) => {
  const userId = req.userId;
  try {
    const recentUsers = await Message.distinct("fromName", { to: userId });
    console.log(recentUsers);
    const recentIds = await Message.distinct("from", { to: userId });
    console.log(recentIds);
    const users = [];
    for (const recent of recentUsers) {
      users.push({ name: recent });
    }
    console.log(users);
    var j = 0;
    for (const id of recentIds) {
      users[j] = { ...users[j], id: id };
      j++;
    }
    console.log(users);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteaBookFromWish = async (req, res) => {
  // console.log("This is Backend Request to delete a book" );
  const { id } = req.params;
  // console.log(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });
    // console.log("Valid ID")
    const book = await Book.findById(id);
    const filteredBooks = book.wishListedBy.filter(
      (userId) => req.userId != userId
    );
    // console.log("My id"+ req.userId)
    book.wishListedBy = filteredBooks;
    // console.log("Book"+ book.wishListedBy);
    await Book.findOneAndUpdate({ _id: id }, book, { new: true });
    // console.log("Book deleted successfully")

    return res.status(204).json({ msg: "Book Deleted Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};
