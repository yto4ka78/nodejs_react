const express = require("express");
const router = express.Router();
const bouquetController = require("../controllers/bouquetController");
const multer = require("multer");
const { storage } = require("../middleware/cloudinary");
const upload = multer({ storage });

router.post("/create", upload.array("photo", 5), bouquetController.createBouquet);

module.exports = router;
