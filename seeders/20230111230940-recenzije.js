'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recenzijes', [
      {
        userId: 1,
        komentar: "Usluga odlicna! Sve pohvale!"
      },
      {
        userId: 2,
        komentar: "Godinama dolazim u ovaj salon, prezadovoljna sam!"
      },
      {
        userId: 3,
        komentar: "Sve je cisto i uredno. Radnice su ljubazne."
      },
      {
        userId: 4,
        komentar: "Prelep salon i usluga!"
      },
      {
        userId: 5,
        komentar: "Prezadovoljna sam! Sigurno cu doci opet!"
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
