"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn("Bouquets", "imageUrl", {
            type: Sequelize.TEXT, // Изменяем тип данных на TEXT
            allowNull: true, // Оставляем возможность хранить NULL
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn("Bouquets", "imageUrl", {
            type: Sequelize.STRING, // Возвращаем обратно VARCHAR
            allowNull: true,
        });
    },
};
