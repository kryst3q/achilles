'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      author: {
          type: DataTypes.STRING,
          allowNull: true
      },
      description: {
          type: DataTypes.STRING,
          allowNull: true
      },
      storingPlace: {
          type: DataTypes.STRING,
          allowNull: true
      },
      originPlace: {
          type: DataTypes.STRING,
          allowNull: true
      },
      originDate: {
          type: DataTypes.DATE,
          allowNull: true
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  Image.associate = function(models) {
      Image.belongsTo(models.File);
      Image.belongsToMany(models.Outfit, { through: 'OutfitsImages' });
  };

  return Image;
};