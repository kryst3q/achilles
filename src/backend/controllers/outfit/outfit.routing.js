'use strict';

const getOutfit = require('./get-outfit.action.js');

module.exports = {
    '/list': {
        get: {
            action: getOutfit.getAll,
            level: 'public'
        }
    },
    '/:id': {
        get: {
            action: getOutfit.getOne,
            level: 'public'
        }
    }
};
