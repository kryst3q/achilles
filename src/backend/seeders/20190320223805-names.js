'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Names', [
            {
                displayValue: 'Apaszka',
                searchValue: 'apaszka',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Scarf',
                searchValue: 'scarf',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Buty',
                searchValue: 'buty',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Shoes',
                searchValue: 'shoes',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Bluza',
                searchValue: 'bluza',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Blouse',
                searchValue: 'blouse',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Chiton',
                searchValue: 'chiton',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Chiton',
                searchValue: 'chiton',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Kalesony',
                searchValue: 'kalesony',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Drawers',
                searchValue: 'drawers',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Spodnie',
                searchValue: 'spodnie',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Trousers',
                searchValue: 'trousers',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Żakiet',
                searchValue: 'zakiet',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Jacket',
                searchValue: 'jacket',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Majtki',
                searchValue: 'majtki',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Panties',
                searchValue: 'panties',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Pokoszulek',
                searchValue: 'podkoszulek',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Undershirt',
                searchValue: 'undershirt',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            },
            {
                displayValue: 'Sweter',
                searchValue: 'sweter',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 129
            },
            {
                displayValue: 'Sweater',
                searchValue: 'sweater',
                createdAt: new Date(),
                updatedAt: new Date(),
                LanguageId: 38
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Names', null, {});
    }
};
