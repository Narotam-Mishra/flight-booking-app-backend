'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{
      type: 'foreign key',
      fields: ['cityId'],
      name: 'fk_city_airport',
      references: {
        table: 'Cities',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Airports', 'fk_city_airport');
  }
};