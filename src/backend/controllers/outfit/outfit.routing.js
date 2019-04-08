'use strict';

const getAll = require('./get-all.action.js');
const getOne = require('./get-one.action.js');
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
    '/:id': {
        get: {
            middlewares: getOne.middlewares,
            action: getOne.action,
            level: 'public'
        }
    }
};
