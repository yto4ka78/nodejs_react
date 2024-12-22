const express = require("express");
const router = express.Router();

const postsRoutes = require("./posts");
const bouquetRoutes = require("./bouquet");
const registrationRoutes = require("./registration");
const login = require("./login");
const logout = require("./logout");

router.use("/posts", postsRoutes);
router.use("/bouquet", bouquetRoutes);
router.use("/registration", registrationRoutes);
router.use("/login", login);
router.use("/logout", logout);

module.exports = router;
