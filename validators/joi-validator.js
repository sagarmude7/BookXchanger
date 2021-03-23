const joi = require('joi')

const regValidator = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    college:joi.string().required(),
    location:joi.string().required(),
    email:joi.string().required().email(),
    password:joi.string().min(6).required(),
    confirmPassword:joi.string().min(6).required()
})

const loginValidator = joi.object({
    email:joi.string().required().email(),
    password:joi.string().min(6).required()
})

const editValidator = joi.object({
    name:joi.string().required(),
    email:joi.string().required().email(),
    college:joi.string().required(),
    location:joi.string().required(),
})

module.exports.loginValidator = loginValidator
module.exports.regValidator = regValidator
module.exports.editValidator = editValidator