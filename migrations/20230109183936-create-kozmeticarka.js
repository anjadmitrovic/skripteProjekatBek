'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kozmeticarkas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ime: {
        type: Sequelize.STRING
      },
      prezime: {
        type: Sequelize.STRING
      },
      vrstaUsluge: {
        type: Sequelize.STRING
      },
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kozmeticarkas');
  }
};