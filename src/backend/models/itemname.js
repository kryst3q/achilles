'use strict';

module.exports = (sequelize, DataTypes) => {
  const ItemName = sequelize.define('ItemName', {
      id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
    NameId: {
        type: DataTypes.INTEGER,
        unique: 'item_name_nameable'
    },
    nameable: {
        type: DataTypes.STRING,
        unique: 'item_name_nameable'
    },
    NameableId: {
        type: DataTypes.INTEGER,
        unique: 'item_name_nameable',
        references: null
    },
      createdAt: {
          type: DataTypes.DATE
      },
      updatedAt: {
          type: DataTypes.DATE
      }
  }, {});

  ItemName.associate = function(models) {
    // associations can be defined here
  };

  return ItemName;
};