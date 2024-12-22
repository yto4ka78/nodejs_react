const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/login", loginController.autorization);

module.exports = router;
