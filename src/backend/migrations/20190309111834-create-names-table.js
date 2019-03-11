'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Names', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          displayValue: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
          },
          searchValue: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
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

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Names');
  }
};
