const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'Токен отсутствует' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).send({ message: 'Неверный токен' });
    }
};

module.exports = authMiddleware;
