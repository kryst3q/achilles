'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { param } = require('express-validator/check');

/*
 * TODO: make this work!
 */
module.exports.middlewares = [
    param('id').isInt()
];

module.exports.action = (req, res) => {
    models.Language.findByPk(req.params.id)
        .then(language => {
            res
                .status(200)
                .json(language)
            ;
        }).catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
