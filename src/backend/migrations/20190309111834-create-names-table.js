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
              unique: 'name_value_language_unique'
          },
          searchValue: {
              type: Sequelize.STRING,
              allowNull: false
          },
          LanguageId: {
              type: Sequelize.INTEGER,
              references: {
                  model: 'Languages',
                  key: 'id'
              },
              unique: 'name_value_language_unique',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE'
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
