const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Bouqeut = sequelize.define("Bouquet", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    composition: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.TEXT, // Используем TEXT для хранения JSON
        allowNull: true,
        get() {
            const rawValue = this.getDataValue("imageUrl");
            return rawValue ? JSON.parse(rawValue) : []; // Парсим JSON обратно в массив
        },
        set(value) {
            this.setDataValue("imageUrl", JSON.stringify(value)); // Преобразуем массив в строку JSON
        },
    },
});

module.exports = Bouqeut;
