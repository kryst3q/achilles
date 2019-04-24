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
            references: {
                model: 'Outfits',
                key: 'id'
            },
            unique: 'outfit_name_unique',
            onDelete: 'CASCADE'
        },
        NameId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'Names',
                key: 'id'
            },
            unique: 'outfit_name_unique',
            onDelete: 'CASCADE'
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OutfitsNames');
  }
};
