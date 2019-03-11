'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Names',
        'LanguageId',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Languages',
                key: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Names',
        'LanguageId'
    );
  }
};
