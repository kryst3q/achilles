'use strict';

module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      hash: {
        type: DataTypes.STRING
      },
      name: {
          type: DataTypes.STRING
      },
      extension: {
          type: DataTypes.STRING
      },
      mimeType: {
          type: DataTypes.STRING
      },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  File.associate = function(models) {
    // associations can be defined here
  };

  return File;
};