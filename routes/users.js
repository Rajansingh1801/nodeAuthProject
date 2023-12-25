const express = require("express");
const router = express.Router();
const validation = require("../validation/index");

router.post("/signup", validation.userValidation.SignupValidator);
router.post("/login", validation.userValidation.LoginValidator);
