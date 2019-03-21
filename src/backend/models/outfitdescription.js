'use strict';

module.exports = (sequelize, DataTypes) => {
  const OutfitDescription = sequelize.define('OutfitDescription', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      description: {
        type: DataTypes.STRING
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  OutfitDescription.associate = function(models) {
      OutfitDescription.belongsTo(models.Language);
  };

  return OutfitDescription;
};