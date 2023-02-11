'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lokacijes', [
      {
        terminId: 1,
        igraonicaId: 1,
        adresa: "Vracar"
      },
      {
        terminId: 2,
        igraonicaId: 2,
        adresa: "Zvezdara"
      },
      {
        terminId: 3,
        igraonicaId: 2,
        adresa: "Zvezdara"
      },
      {
        terminId: 4,
        igraonicaId: 1,
        adresa: "Vracar"
      },
      {
        terminId: 5,
        igraonicaId: 1,
        adresa: "Vracar"
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
