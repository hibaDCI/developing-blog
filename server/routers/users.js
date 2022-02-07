const express = require("express");
const router = express.Router();
const {validateUsers, validateUsersLogin} = require("../middlesware/validator");
const userController = require("../controllers/userController");
// router.route("/login").post(validateUser, loginUser);
// router.route("/register").post(validateUser, signUpUser);
router.post("/register", validateUsers, userController.signUpUser);
router.post("/login", validateUsersLogin, userController.loginUser);
router.post("/updatePass", userController.updatePassword);
router.get("/test", userController.testCookies);

module.exports = router;
