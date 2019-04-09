'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Datings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start: {
        type: Sequelize.DATE,
          allowNull: false
      },
      end: {
        type: Sequelize.DATE,
          allowNull: false
      },
      OutfitId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Outfits',
              key: 'id'
          },
          unique: 'outfit_dating_unique'
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
    return queryInterface.dropTable('Datings');
  }
};
