'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lokacijes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      terminId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"termins", 
          key:"id"
        },
        onDelete:"CASCADE"

      },
      igraonicaId: {
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:"lokacijes", 
          key:"id"
        },
        onDelete:"CASCADE"

      },
      adresa: {
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
    await queryInterface.dropTable('Lokacijes');
  }
};