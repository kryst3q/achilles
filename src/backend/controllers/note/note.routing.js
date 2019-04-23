'use strict';

const getAll = require('./get-all.action.js');
const getOne = require('./get-one.action.js');
const postAddOrUpdate = require('./post-addOrUpdate.action.js');

module.exports = {
    '/': {
        post: {
            middlewares: postAddOrUpdate.middlewares,
            action: postAddOrUpdate.action,
            level: 'public'
        }
    },
    '/list': {
        get: {
            action: getAll.action,
            level: 'public'
        }
    },
    '/:id': {
        get: {
            middlewares: getOne.middlewares,
            action: getOne.action,
            level: 'public'
        }
    }
};
