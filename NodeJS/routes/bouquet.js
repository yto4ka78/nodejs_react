const express = require("express");
const router = express.Router();
const bouquetController = require("../controllers/bouquetController");
const multer = require("multer");
const { storage } = require("../middleware/cloudinary");
const upload = multer({ storage });
const authenticate = require("../middleware/authMiddleware");

router.post(
    "/create",
    authenticate(["root"]),
    upload.array("photo", 5),
    bouquetController.createBouquet
);

module.exports = router;
