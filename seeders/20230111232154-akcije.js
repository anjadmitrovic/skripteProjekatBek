'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Akcijes', [
      {
        tretmanId: 1,
        popust: 10
      },
      {
        tretmanId: 2,
        popust: 10
      },
      {
        tretmanId: 3,
        popust: 5
      },
      {
        tretmanId: 4,
        popust: 20
      },
      {
        tretmanId: 5,
        popust: 5
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
