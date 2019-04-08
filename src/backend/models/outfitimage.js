'use strict';

module.exports = (sequelize, DataTypes) => {
  const OutfitImage = sequelize.define('OutfitImage', {
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

    OutfitImage.associate = function(models) {
      //
  };

  return OutfitImage;
};