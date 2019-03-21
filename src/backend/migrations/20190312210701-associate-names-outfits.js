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
            unique: 'outfit_name_unique'
        },
        NameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: 'outfit_name_unique'
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OutfitsNames');
  }
};
