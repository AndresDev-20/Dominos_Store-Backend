'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Andres.dev",
        email: "andres.dev@example.com",
        password: "Futuro123",
        rolId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alan.dev",
        email: "alan.dev@example.com",
        password: "Futuro123",
        rolId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
