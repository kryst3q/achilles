'use strict';

module.exports = (sequelize, DataTypes) => {
  const Name = sequelize.define('Name', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    displayValue: {
        type: DataTypes.STRING
    },
    searchValue: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
  }, {});

    Name.associate = function(models) {
        Name.belongsTo(models.Language);
    };

    return Name;
};
