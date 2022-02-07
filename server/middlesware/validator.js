const {body} = require("express-validator");

const validateUsers = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .notEmpty()
    .withMessage("please inter a value for the password")
    .isLength({min: 8})
    .withMessage("at least 8 characters")
    .custom((val, {req}) => {
      if (val !== req.body.confirm_password) {
        throw new Error("Password don't match!");
      } else {
        return val;
      }
    }),
];
const validateUsersLogin = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .notEmpty()
    .withMessage("please inter a value for the password")
    .isLength({min: 8})
    .withMessage("at least 8 characters"),
];

const validateUserUpdate = [
  body("username")
    .notEmpty()
    .withMessage("name shouldn't be empty")
    .isLength({min: 3})
    .withMessage("name should be at least 3 characters"),
];

module.exports = {validateUsers, validateUserUpdate, validateUsersLogin};
