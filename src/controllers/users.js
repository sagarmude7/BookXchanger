const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Book = require("../models/Book");
const Message = require("../models/Message");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");
const {
  regValidator,
  loginValidator,
  editValidator,
  changePasswordValidator,
  feedBackValidator,
  emailOnlyValidator,
} = require("../validators/joi-validator");

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const FEEDBACK_RECEIVER =
  process.env.FEEDBACK_RECEIVER || "bookxchanger7@gmail.com";

const createTransporter = () =>
  nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    requireTLS: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

// Cryptographically-secure random password generator
function random_password_generate(max, min) {
  const passwordChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  const range = max - min + 1;
  const randPwLen = min + (crypto.randomBytes(2).readUInt16BE(0) % range);
  let randPassword = "";
  for (let i = 0; i < randPwLen; i++) {
    const idx = crypto.randomInt(0, passwordChars.length);
    randPassword += passwordChars[idx];
  }
  return randPassword;
}

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
  const { error } = regValidator.validate(req.body);
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
    await User.findOneAndUpdate(
      { email: email },
      { verifyEmailToken: token, verifyEmailExpires: Date.now() + 300000 },
      { new: true },
    );

    const sender = SMTP_USER;
    const subject = "BookXchanger Verify Email";
    const origin = req.headers.origin || "";
    const body =
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      origin +
      "/verify-email/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n";

    const transporter = createTransporter();

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
      }
    });
    return res.status(200).json({
      profile: { name: newUser.name, email: newUser.email, id: newUser._id },
      token,
    });
  } catch (err) {
    return res.status(500).json({ msg: "SomeThing went wrong" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginValidator.validate(req.body);

  try {
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const oldUser = await User.findOne({ email: email });

    if (!oldUser)
      return res.status(400).json({ msg: "Invalid email or password" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" },
    );
    return res.status(200).json({
      profile: { name: oldUser.name, email: oldUser.email, id: oldUser._id },
      token,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.verifyEmail = async (req, res) => {
  const { error } = emailOnlyValidator.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });
  const email = req.body.email;
  const payload = { email: email };
  try {
    const oldUser = await User.findOne({ email: email });
    if (!oldUser)
      return res.status(400).json({ msg: "No user exists with this email" });

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });
    await User.findOneAndUpdate(
      { email: email },
      { verifyEmailToken: token, verifyEmailExpires: Date.now() + 300000 },
      { new: true },
    );
    const sender = SMTP_USER;
    const subject = "BookXchanger Verify Email";
    const origin = req.headers.origin || "";
    const body =
      "Please verify your email by clicking the link below:\n\n" +
      origin +
      "/verify-email/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email..\n";

    const transporter = createTransporter();

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
      }
    });

    return res
      .status(200)
      .json({ msg: "An E-mail has been sent with further instructions" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.validateUser = async (req, res) => {
  const newToken = req.body.token;
  try {
    if (!newToken) {
      return res.status(400).json({ msg: "Invalid token" });
    }
    try {
      jwt.verify(newToken, process.env.TOKEN_SECRET);
    } catch (e) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    const oldUser = await User.findOne({ verifyEmailToken: newToken });
    if (!oldUser) {
      return res.status(400).json({ msg: "Invalid token" });
    }
    await User.findByIdAndUpdate(oldUser._id, {
      $unset: { verifyEmailToken: 1, verifyEmailExpires: 1 },
    });
    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" },
    );
    return res.status(200).json({
      profile: { name: oldUser.name, email: oldUser.email, id: oldUser._id },
      token,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.sendResetPassEmail = async (req, res) => {
  const { error } = emailOnlyValidator.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });
  const email = req.body.email;
  const payload = { email: email };
  try {
    const oldUser = await User.findOne({ email: email });

    if (!oldUser)
      return res.status(400).json({ msg: "No user exists with this email" });

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });

    await User.findOneAndUpdate(
      { email: email },
      { resetPasswordToken: token, resetPasswordExpires: Date.now() + 300000 },
      { new: true },
    );
    const sender = SMTP_USER;
    const subject = "BookXchanger Password Reset";
    const origin = req.headers.origin || "";
    const body =
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      origin +
      "/password-reset/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n";

    const transporter = createTransporter();

    const mailOptions = {
      from: sender,
      to: email,
      subject: subject,
      text: body,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
      }
    });

    return res
      .status(200)
      .json({ msg: "An e-mail has been sent with further instructions" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};

exports.checkValidUser = async (req, res) => {
  try {
    if (!req.body.token) {
      return res.status(400).json({ msg: "Password Token is inValid" });
    }
    try {
      jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    } catch (e) {
      return res.status(400).json({ msg: "Password Token is inValid" });
    }
    const foundUser = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!foundUser)
      return res.status(400).json({ msg: "Password Token is inValid" });
    return res
      .status(200)
      .json({ msg: "User and Token Validated successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    if (!req.body.token || !req.body.password) {
      return res.status(400).json({ msg: "Invalid request" });
    }
    try {
      jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    } catch (e) {
      return res.status(400).json({ msg: "Password Token is inValid" });
    }
    const foundUser = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!foundUser)
      return res.status(400).json({ msg: "Password Token is inValid" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.findOneAndUpdate(
      { email: foundUser.email },
      {
        resetPasswordToken: "",
        resetPasswordExpires: "",
        password: hashedPassword,
      },
      { new: true },
    );

    return res.status(200).json({ msg: "Password reset successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

exports.googleFacebookSignIn = async (req, res) => {
  const { tokenId, name, profilePic } = req.body;
  try {
    if (!tokenId) {
      return res.status(400).json({ msg: "Missing token" });
    }

    let email;
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: GOOGLE_CLIENT_ID,
      });
      email = ticket.getPayload().email;
    } catch {
      return res.status(401).json({ msg: "Invalid Google token" });
    }
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
      const password = random_password_generate(20, 10);
      const hashedPassword = await bcrypt.hash(password, 10);
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
      { new: true },
    );

    const token = jwt.sign(
      { email: updatedUser.email, id: oldUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "4h" },
    );

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

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ msg: "Invalid id" });

    const user = await User.findById(id).select(
      "-password -resetPasswordToken -resetPasswordExpires -verifyEmailToken -verifyEmailExpires",
    );
    if (!user) return res.status(404).json({ msg: "User not found" });
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
    }).select(
      "-password -resetPasswordToken -resetPasswordExpires -verifyEmailToken -verifyEmailExpires",
    );

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
    if (!user) return res.status(404).json({ msg: "User not found" });
    const isPasswordcorrect = await bcrypt.compare(
      currentPassword,
      user.password,
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
      { new: true },
    ).select(
      "-password -resetPasswordToken -resetPasswordExpires -verifyEmailToken -verifyEmailExpires",
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
    const receiver = FEEDBACK_RECEIVER;
    const message = req.body.message;
    const subject = `Feedback from ${req.body.name}`;

    const transporter = createTransporter();

    const mailOptions = {
      from: SMTP_USER,
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
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

    const transporter = createTransporter();

    const mailOptions = {
      from: SMTP_USER,
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
      }
    });
  } catch (err) {
    console.log("sendGoogleMail error");
  }
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
    const transporter = createTransporter();

    const mailOptions = {
      from: SMTP_USER,
      to: receiver,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log("Mail send error");
      }
    });
  } catch (err) {
    console.log("sendChatMail error");
  }
};

exports.getRecentUsers = async (req, res) => {
  const userId = req.userId;
  try {
    const recentUsers = await Message.distinct("fromName", { to: userId });
    const recentIds = await Message.distinct("from", { to: userId });
    const users = [];
    for (const recent of recentUsers) {
      users.push({ name: recent });
    }
    var j = 0;
    for (const id of recentIds) {
      users[j] = { ...users[j], id: id };
      j++;
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.deleteaBookFromWish = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ msg: `No Book with id:${id}` });
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: `No Book with id:${id}` });
    const filteredBooks = book.wishListedBy.filter(
      (userId) => req.userId != userId,
    );
    book.wishListedBy = filteredBooks;
    await Book.findOneAndUpdate({ _id: id }, book, { new: true });

    return res.status(204).json({ msg: "Book Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Something went wrong on Server.." });
  }
};
