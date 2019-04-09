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
    
    models.Outfit.findByPk(req.params.id)
        .then(outfit => {
            const data = {
                id: outfit.id
            };
            let promises = [];

            promises.push(
                new Promise((resolve, reject) => {
                    outfit.getNames()
                        .then(names => resolve(data.names = names.map(name => ({
                            id: name.id,
                            value: name.displayValue
                        }))))
                        .catch(err => reject(console.log(err)))
                })
            );

            promises.push(
                new Promise((resolve, reject) => {
                    outfit.getImages()
                        .then(images => resolve(
                            Promise.all(images.map(image => image.getFile()))
                                .then(files => {
                                    data.images = images.map(image => {
                                        for (var i = 0; i < files.length; i++) {
                                            if (files[i].id === image.FileId) {
                                                return {id: image.id, value: files[i].hash};
                                            }
                                        }
                                    })
                                })
                        ))
                        .catch(err => reject(console.log(err)));
                })
            );

            promises.push(
                new Promise((resolve, reject) => {
                    outfit.getDescription()
                        .then(descriptions => resolve(
                            data.description = {
                                id: descriptions[0].id,
                                value: descriptions[0].description
                            }
                        ))
                        .catch(err => reject(console.log(err)))
                })
            );

            promises.push(
                new Promise((resolve, reject) => {
                    outfit.getDatings()
                        .then(datings => resolve(data.datings = datings.map(dating => ({
                            id: dating.id,
                            start: dating.start,
                            end: dating.end
                        }))))
                        .catch(err => reject(console.log(err)));
                })
            );

            Promise.all(promises)
                .then(() => res
                    .status(200)
                    .json(data)
                )
                .catch((err) => res
                    .status(400)
                    .json(err)
                );
        })
        .catch(error => {
            console.log(error);
            res
                .status(400)
                .json(error)
            ;
        });
};
