const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numberPhone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orders: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
    },
    roles: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: ["user"],
    },
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
