const Bouquet = require("../models/Bouquet");
const multer = require("multer");
const { storage } = require("../middleware/cloudinary");
const upload = multer({ storage });

class BouquetController {
    static async createBouquet(req, res) {
        try {
            console.log("Тело запроса:", req.body); // Логируем тело запроса
            console.log("Файл запроса:", req.files);
            const { name, description, price, composition } = req.body;

            const imageUrl = req.files.map((file) => file.path);

            const bouquet = new Bouquet({
                name,
                description,
                price,
                composition,
                imageUrl,
            });

            await bouquet.save();
            res.status(201).json({
                message: "Букет добавлен успешно",
                bouquet,
            });
        } catch (error) {
            console.error("Ошибка добавления букета:", error);
            res.status(500).json({ error: "Ошибка при добавлении букета" });
        }
    }
}

module.exports = BouquetController;
