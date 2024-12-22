const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");

router.post("/registration", registrationController.register);

module.exports = router;
