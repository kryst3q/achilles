'use strict';

module.exports = (sequelize, DataTypes) => {
  const OutfitName = sequelize.define('OutfitName', {
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

    OutfitName.associate = function(models) {
      //
  };

  return OutfitName;
};