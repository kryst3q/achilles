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
            middlewares: getLanguage.middlewares,
            action: getLanguage.getOne,
            level: 'public'
        }
    }
};
