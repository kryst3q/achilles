'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OutfitsNames', {
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        OutfitId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        NameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OutfitsNames');
  }
};
