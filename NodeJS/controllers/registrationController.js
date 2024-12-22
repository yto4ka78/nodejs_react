const User = require("../models/User");

class registrationController {
    static async register(req, res) {
        const { email, password } = req.body;

        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: "Email уже используется" });
            }

            const newUser = await User.create({ email, password });
            res.status(201).json({
                message: "Пользователь успешно зарегистрирован",
            });
        } catch (err) {
            console.error("Ошибка сервера:", err);
            res.status(500).json({
                message: "Ошибка сервера",
                error: err.message,
            });
        }
    }
}

module.exports = registrationController;
