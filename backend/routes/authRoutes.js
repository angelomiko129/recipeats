const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/authControllers");

const router = express.Router();

// register
router.post("/register", registerUser);

// login
router.post("/login", loginUser);

// get all users
router.get("/users", getUser);

module.exports = router;
