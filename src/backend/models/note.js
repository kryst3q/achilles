'use strict';

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      title: {
          type: DataTypes.STRING
      },
      content: {
          type: DataTypes.STRING
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  Note.associate = function(models) {
    // associations can be defined here
  };

  return Note;
};
