'use strict';

const getAll = require('./get-all.action.js');
const getOne = require('./get-one.action.js');
const postAdd = require('./post-add.action.js');
const putUpdate = require('./put-update.action.js');

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
            action: getOne.action,
            level: 'public'
        },
        put: {
            action: putUpdate.action,
            level: 'public'
        }
    }
};
