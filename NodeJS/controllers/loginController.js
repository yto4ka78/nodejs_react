const User = require("../models/User");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class LoginController {
    static async autorization(req, res) {
        const { logEmail, logPassword } = req.body;

        try {
            if (!JWT_SECRET) {
                throw new Error(
                    "JWT_SECRET не установлен в переменных окружения"
                );
            }
            const user = await User.findOne({ where: { email: logEmail } });
            if (!user) {
                return res
                    .status(404)
                    .json({ message: "Пользователь или пароль неверный" });
            }
            const isMatch = await bcrypt.compare(logPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Пользователь или пароль неверный" });
            }

            const token = jwt.sign(
                { userId: user.id, email: user.email, roles: user.roles },
                JWT_SECRET,
                { expiresIn: "24h" }
            );
            res.json({ token });
        } catch (err) {
            console.error(logEmail);
            console.error("Ошибка в loginController", err);
        }
    }
}

module.exports = LoginController;
