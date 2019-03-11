'use strict';

module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: DataTypes.STRING
      },
      code: {
          type: DataTypes.STRING
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  Language.associate = function(models) {
    // associations can be defined here
  };

  return Language;
};
