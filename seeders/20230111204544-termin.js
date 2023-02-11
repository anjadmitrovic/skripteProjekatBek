'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Termins', [
      {
        dan: "Utorak",
        vreme: "10:00",
        tretmanId: 1 ,
        userId: 1
      },
      {
        dan: "Utorak",
         vreme: "13:00",
         tretmanId: 3 ,
        userId: 3
      },
      {
        dan: "Sreda",
         vreme: "14:00",
         tretmanId:  4,
        userId: 4
      },
      {
        dan: "Sreda",
         vreme: "15:00",
         tretmanId: 5 ,
         userId: 5
      },
      {
        dan: "Cetvrtak",
         vreme: "09:00",
         tretmanId:  1,
         userId: 5
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
