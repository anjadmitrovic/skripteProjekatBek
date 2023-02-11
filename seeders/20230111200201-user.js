'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      username: "Anja",
      password: "anja123",
      ime: "Anja",
      prezime: "Dmitrovic",
      privilegija: "admin"
      },
      {
        username: "Masa",
        password: "masa-123",
        ime: "Masa",
        prezime: "Matic",
        privilegija: "admin"
      },
      {
        username: "Mina",
        password: "minamina",
        ime: "Mina",
        prezime: "Rakic",
        privilegija: "admin"
      },
      {
        username: "Lucija",
        password: "lucijal",
        ime: "Lucija",
        prezime: "Lazic",
        privilegija: "admin"
      },
      {
        username: "Ema",
        password: "ema333",
        ime: "Ema",
        prezime: "Popovic",
        privilegija: "admin"
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
