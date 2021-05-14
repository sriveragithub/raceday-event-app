'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      firstName: 'Test',
      lastName: 'User',
      email: 'test@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Skyler',
      lastName: 'Rivera',
      email: 'skyler@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Another',
      lastName: 'Test',
      email: 'another@one.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {})

  }
};
