'use strict';

const getAll = require('./get-all.action.js');
const getOne = require('./get-one.action.js');
const getSearch = require('./get-search.action.js');

module.exports = {
    '/list': {
        get: {
            action: getAll.action,
            level: 'public'
        }
    },
    '/search': {
        get: {
            action: getSearch.action,
            level: 'public'
        }
    },
    '/:code': {
        get: {
            middlewares: getOne.middlewares,
            action: getOne.action,
            level: 'public'
        }
    }
};
