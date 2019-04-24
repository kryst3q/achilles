'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { param, validationResult } = require('express-validator/check');

module.exports.middlewares = [
    param('id')
        .isInt().withMessage((value, { req }) => {
            return req.t('outfitController:getOne:notInt');
        })
        .custom((value, { req }) => {
            return models.Outfit.findByPk(value)
                .then(outfit => {
                    if (!outfit) {
                        return Promise.reject(req.t('outfitController:getOne:notFound'));
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

    models.Outfit.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(202))
        .catch(err => res.status(400).json(err));
};
