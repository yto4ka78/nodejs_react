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
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            const rawValue = this.getDataValue("imageUrl");
            return rawValue ? JSON.parse(rawValue) : []; 
        },
        set(value) {
            this.setDataValue("imageUrl", JSON.stringify(value)); 
        },
    },
});

module.exports = Bouqeut;
