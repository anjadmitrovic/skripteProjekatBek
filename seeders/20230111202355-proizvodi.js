'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Proizvodis', [
      {
        ime: "Sampon",
        namena: "Kosa"
      },
      {
        ime: "Senke",
        namena: "Sminka"
      },
      {
        ime: "Krema",
        namena: "Lice"
      },
      {
        ime: "Gel",
        namena: "Nokti"
      },
      {
        ime: "Sprej",
        namena: "Kosa"
      },

  ], {});
   
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
