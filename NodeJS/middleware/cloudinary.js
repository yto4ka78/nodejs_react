const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ReactNode/Bouquet",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

module.exports = { storage };