'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { param, validationResult } = require('express-validator/check');

module.exports.middlewares = [
    param('id')
        .isInt().withMessage((value, { req }) => {
            return req.t('imageController:getOne:notInt');
        })
        .custom((value, { req }) => {
            return models.Image.findByPk(value)
                .then(outfit => {
                    if (!outfit) {
                        return Promise.reject(req.t('imageController:getOne:notFound'));
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

    models.Image.findByPk(req.params.id, {
        include: [
            models.File
        ]
    })
        .then(image => res.status(200).json(image))
        .catch(err => res.status(400).json(err));
};
