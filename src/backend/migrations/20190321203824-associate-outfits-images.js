'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('OutfitsImages', {
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
              unique: 'outfit_image_unique',
              onDelete: 'CASCADE'
          },
          ImageId: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              references: {
                  model: 'Images',
                  key: 'id'
              },
              unique: 'outfit_image_unique',
              onDelete: 'CASCADE'
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('OutfitsImages');
  }
};
