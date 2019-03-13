'use strict';

const getLanguage = require('./get-language.action.js');

module.exports = {
    '/list': {
        get: {
            action: getLanguage.getAll,
            level: 'public'
        }
    },
    '/:id': {
        get: {
            action: getLanguage.getOne,
            level: 'public'
        }
    }
};
