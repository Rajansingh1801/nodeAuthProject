const { body, check, query, params } = require("express-validator");

const LoginValidator = [
  check("email").notEmpty().withMessage("please enter your email address"),
  check("password").notEmpty().withMessage("please enter your password"),
];

const SignupValidator = [
  check("name").notEmpty().withMessage("please enter your name"),
  check("email").notEmpty().withMessage("please enter your email address"),
  check("password").notEmpty().withMessage("please enter your password"),
];

module.exports = { LoginValidator, SignupValidator };
