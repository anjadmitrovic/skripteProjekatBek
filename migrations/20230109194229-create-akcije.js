'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Akcijes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tretmanId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"tretmans", 
          key:"id"
        },
        onDelete:"CASCADE"

      },
      popust: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Akcijes');
  }
};