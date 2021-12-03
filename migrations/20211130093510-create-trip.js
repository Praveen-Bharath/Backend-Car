'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trip', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TripNo: {
        type: Sequelize.UUID
      },
      CarId: {
        type: Sequelize.INTEGER
      },
      From_location: {
        type: Sequelize.STRING
      },
      To_location: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },*/

      TripNo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
       primaryKey:true,
       allowNull:false
      },
      From_location: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      To_location: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      Date: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trip');
  }
};