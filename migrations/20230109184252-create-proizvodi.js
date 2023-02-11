'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proizvodis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ime: {
        type: Sequelize.STRING
      },
      namena: {
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
    await queryInterface.dropTable('Proizvodis');
  }
};