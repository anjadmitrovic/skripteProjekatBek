'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Termins', {
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
      userId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"users", 
          key:"id"
        },
        onDelete:"CASCADE"

      },
      dan: {
        type: Sequelize.STRING
      },
      vreme: {
        type: Sequelize.STRING
      },
      createdAt: {
       // allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
       // allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Termins');
  }
};