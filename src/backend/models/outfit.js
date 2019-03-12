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
      Outfit.belongsToMany(models.Name, { through: 'OutfitsNames' });
  };

  return Outfit;
};
