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
    const LanguageId = req.query.LanguageId;

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array({ onlyFirstError: true })
            });
    }

    models.Outfit.findByPk(req.params.id, {
        include: [
            models.Dating,
            {
                model: models.OutfitDescription,
                as: 'Description',
                where: { LanguageId: LanguageId},
                required: false
            },
            {
                model: models.Name,
                as: 'Names',
                where: { LanguageId: LanguageId},
                required: false
            },
            {
                model: models.Image,
                as: 'Images',
                include: [ models.File ]
            }
        ]
    })
        .then(outfit => res.status(200).json(outfit))
        .catch(err => res.status(400).json(err));
};
