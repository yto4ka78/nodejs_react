require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { connectDB, sequelize, syncBD } = require("./config/db");

connectDB();
syncBD();

app.use(express.json());

const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, "../React/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../React/build", "index.html"));
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
