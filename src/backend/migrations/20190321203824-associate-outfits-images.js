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
              unique: 'outfit_image_unique'
          },
          ImageId: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              unique: 'outfit_image_unique'
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('OutfitsImages');
  }
};
