'use strict';

module.exports = (sequelize, DataTypes) => {
  const Outfit = sequelize.define('Outfit', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  Outfit.associate = function(models) {
      Outfit.belongsToMany(models.Name, { as: 'Names', through: 'OutfitsNames' });
      Outfit.belongsToMany(models.Image, { as: 'Images', through: 'OutfitsImages' });
      Outfit.hasMany(models.OutfitDescription, { as: 'Description' });
      Outfit.hasMany(models.Dating);
  };

  return Outfit;
};
