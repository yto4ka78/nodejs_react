const express = require("express");
const router = express.Router();

//Указать файл с роутинго который в этой же папке
const postsRoutes = require("./posts");
const bouquetRoutes = require("./bouquet");

router.use("/posts", postsRoutes);
router.use("/bouquet", bouquetRoutes);

module.exports = router;
