const joi = require("joi");

const regValidator = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  college: joi.string().required(),
  location: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.string().min(6).required(),
});

const loginValidator = joi.object({
  email: joi.string().required().email(),
  password: joi.string().min(6).required(),
});

const editValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  college: joi.string().required(),
  location: joi.string().required(),
  profilePic: joi.string(),
});

const changePasswordValidator = joi.object({
  currentPassword: joi.string().min(6).required(),
  newPassword: joi.string().min(6).required(),
  confirmPassword: joi.string().min(6).required(),
});

const postBookValidator = joi.object({
  bookName: joi.string().required(),
  subject: joi.string().required(),
  branch: joi.string().required(),
  price: joi.number().required(),
  condition: joi.string().required(),
  priceType: joi.string().required(),
  mrp: joi.number().required(),
  selectedFile: joi.string().required(),
  author: joi.string().required(),
  bookName: joi.string().required(),
  tags: joi.array().required(),
  noOfPages: joi.number().required(),
  edition: joi.string().required(),
  description: joi.string().required().min(20),
  ownerName: joi.string().required(),
});

const feedBackValidator = joi.object({
  name: joi.string().required(),
  message: joi.string().required().min(20)
});

module.exports.loginValidator = loginValidator;
module.exports.regValidator = regValidator;
module.exports.editValidator = editValidator;
module.exports.changePasswordValidator = changePasswordValidator;
module.exports.postBookValidator = postBookValidator;
module.exports.feedBackValidator = feedBackValidator;
