'use strict';

const getAll = require('./get-all.action.js');
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
    }
};
