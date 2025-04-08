const express = require("express");
const router = express.Router();
const bouquetController = require("../controllers/bouquetController");
const multer = require("multer");
const { storageBouquet } = require("../middleware/cloudinary");
const upload = multer({ storage: storageBouquet });
const authenticate = require("../middleware/authMiddleware");
const util = require("util");

router.post(
  "/create",
  authenticate(["root"]),
  upload.array("photo", 5),
  bouquetController.createBouquet
);

router.post(
  "/getAllBouquets",
  authenticate(["root"]),
  bouquetController.getAllBouquets
);

router.post(
  "/modifyBouquet",
  authenticate(["root"]),
  upload.array("photo", 5),
  bouquetController.modifyBouquet
);

router.delete(
  "/handleDelete/:id",
  authenticate(["root"]),
  bouquetController.handleDelete
);

module.exports = router;
