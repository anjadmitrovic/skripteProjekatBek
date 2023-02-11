'use strict';

const kozmeticarka = require('../models/kozmeticarka');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tretmans', [
      {
        ime: "Nokti",
        vrsta: "Nadogradnja",
        cena: 2200,
        kozmeticarkaId : 1,
        proizvodId: 4
      },
      {
        ime: "Nokti",
        vrsta: "Izlivanje",
        cena: 3000,
        kozmeticarkaId : 3,
        proizvodId: 4
      },
      {
        ime: "Nokti",
        vrsta: "Korekcija",
        cena: 2000,
        kozmeticarkaId : 3,
        proizvodId: 4
      },
      {
        ime: "Lice",
        vrsta: "Ciscenje",
        cena: 2000,
        kozmeticarkaId:4,
        proizvodId: 3
      },
      {
        ime: "Kosa",
        vrsta: "Feniranje",
        cena: 700,
        kozmeticarkaId: 5,
        proizvodId: 1
      },
      {
        ime: "Kosa",
        vrsta: "Sisanje",
        cena: 700,
        kozmeticarkaId: 5,
        proizvodId: 5
      }
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
