'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('ItemsNames', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          NameId: {
              type: Sequelize.INTEGER,
              unique: 'item_name_nameable'
          },
          nameable: {
              type: Sequelize.STRING,
              unique: 'item_name_nameable'
          },
          NameableId: {
              type: Sequelize.INTEGER,
              unique: 'item_name_nameable',
              references: null
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
      return queryInterface.dropTable('ItemsNames');
  }
};
