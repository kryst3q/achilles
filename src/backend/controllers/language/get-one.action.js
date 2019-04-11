'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { param, validationResult } = require('express-validator/check');

module.exports.middlewares = [
    param('code')
        .matches(/^[a-z]{2}$/).withMessage((value, { req }) => {
            return req.t('languageController:invalidCode');
        })
        .custom((value, { req }) => {
            return models.Language.findOne({
                where: {
                    code: req.params.code
                }
            })
                .then(language => {
                    if (!language) {
                        return Promise.reject(req.t('languageController:notFound'));
                    }
                });
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

    models.Language.findOne({
        where: {
            code: req.params.code
        }
    })
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
