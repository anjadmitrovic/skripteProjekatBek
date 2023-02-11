'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Placanjes', [
      {
        terminId: 1,
        iznos: 2200
      },
      {
        terminId: 2,
        iznos: 2000
      },
      {
        terminId: 3,
        iznos: 2000
      },
      {
        terminId: 4,
        iznos: 700
      },
      {
        terminId: 5,
        iznos: 2200
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
