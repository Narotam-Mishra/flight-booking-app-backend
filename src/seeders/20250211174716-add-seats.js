'use strict';

const { Enums } = require('../utils/common');
const { BUSINESS, PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS } = Enums.SEAT_TYPE;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row: 1,
        col: 'A',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'B',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 3,
        col: 'C',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 4,
        col: 'D',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 5,
        col: 'E',
        seatType: BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 6,
        col: 'F',
        seatType: PREMIUM_ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 1,
        col: 'A',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 2,
        col: 'B',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 3,
        col: 'C',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 4,
        col: 'D',
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 5,
        col: 'E',
        seatType: FIRST_CLASS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 6,
        col: 'F',
        seatType: BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
