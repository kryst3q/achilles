'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { param, validationResult } = require('express-validator/check');

module.exports.middlewares = [
    param('id')
        .isInt().withMessage((value, { req }) => {
            return req.t('noteController:getOne:notInt');
        })
        .custom((value, { req }) => {
            return models.Note.findByPk(value)
                .then(note => {
                    if (!note) {
                        return Promise.reject(req.t('noteController:getOne:notFound'));
                    }
                })
    })
];

module.exports.action = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array({ onlyFirstError: true })
            });
    }

    models.Note.findByPk(req.params.id)
        .then(note => res.status(200).json(note))
        .catch(err => res.status(400).json(err));
};
