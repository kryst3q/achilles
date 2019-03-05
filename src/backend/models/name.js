'use strict';

module.exports = (sequelize, DataTypes) => {
    const name = sequelize.define('name', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return name;
};
