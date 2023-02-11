'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tretmans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kozmeticarkaId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"kozmeticarkas", 
          key:"id"
        },
        onDelete:"CASCADE"

      },
      proizvodId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"proizvodis", 
          key:"id"
        },
        onDelete:"CASCADE"
      },
      ime: {
        type: Sequelize.STRING
      },
      vrsta: {
        type: Sequelize.STRING
      },
      cena: {
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
    await queryInterface.dropTable('Tretmans');
  }
};