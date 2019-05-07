'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      author: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      storingPlace: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      originPlace: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      originDate: {
        type: Sequelize.DATE
      },
      FileId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Files',
              key: 'id'
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};