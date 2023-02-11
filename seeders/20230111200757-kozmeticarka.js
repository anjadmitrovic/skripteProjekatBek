'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kozmeticarkas', [
      {
        ime: "Ana",
        prezime: "Delic",
        vrstaUsluge: "Nokti"
      },
      {
        ime: "Milica",
        prezime: "Matic",
        vrstaUsluge: "Sminkanje"
      },
      {  
      ime: "Sofija",
      prezime: "Jovanovic",
      vrstaUsluge: "Nokti"
      },
      {  
        ime: "Marija",
        prezime: "Jovanovic",
        vrstaUsluge: "Lice"
      },
      {  
        ime: "Kristina",
        prezime: "Peric",
        vrstaUsluge: "Kosa"
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
