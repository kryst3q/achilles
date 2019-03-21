'use strict';

const postAdd = require('./post-add.action.js');

module.exports = {
    '/upload': {
        post: {
            action: postAdd.action,
            level: 'public'
        }
    }
};
