'use strict';

module.exports = (sequelize, DataTypes) => {
  const Dating = sequelize.define('Dating', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      start: {
          type: DataTypes.DATE
      },
      end: {
          type: DataTypes.DATE
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  Dating.associate = function(models) {
    // associations can be defined here
  };

  return Dating;
};
