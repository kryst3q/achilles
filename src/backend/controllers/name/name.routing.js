'use strict';

const deleteOne = require('./delete-one.action.js');
const getAll = require('./get-all.action.js');
const getOne = require('./get-one.action.js');
const getSearch = require('./get-search.action.js');
const postAdd = require('./post-add.action.js');

module.exports = {
    '/': {
        post: {
            action: postAdd.action,
            level: 'public'
        }
    },
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
    '/:id': {
        delete: {
            middlewares: deleteOne.middlewares,
            action: deleteOne.action,
            level: 'public'
        },
        get: {
            action: getOne.action,
            level: 'public'
        }
    }
};
