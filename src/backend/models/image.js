'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      /* TODO: make table/tables? to store translated ?name & description */
      name: {
          type: DataTypes.STRING,
          allowNull: true
      },
      /* ?TODO: make "people" table and store in this attributes people id */
      author: {
          type: DataTypes.STRING,
          allowNull: true
      },
      description: {
          type: DataTypes.STRING,
          allowNull: true
      },
      /* TODO: make "place" table and store in this attributes place id */
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
      Image.belongsToMany(models.Outfit, { through: 'OutfitsImages', onDelete: 'CASCADE' });
  };

  return Image;
};