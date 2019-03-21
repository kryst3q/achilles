'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OutfitDescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      LanguageId: {
        type: Sequelize.INTEGER,
          references: {
            model: 'Languages',
            key: 'id'
          },
          unique: 'outfit_description_language_unique'
      },
      OutfitId: {
        type: Sequelize.INTEGER,
          references: {
              model: 'Outfits',
              key: 'id'
          },
          unique: 'outfit_description_language_unique'
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
    return queryInterface.dropTable('OutfitDescriptions');
  }
};