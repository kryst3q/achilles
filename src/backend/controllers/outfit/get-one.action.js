'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Outfit.findByPk(req.params.id)
        .then(outfit => {
            const data = {
                id: outfit.id
            };
            let promises = [];

            promises.push(
                new Promise(function(resolve, reject) {
                    outfit.getNames()
                        .then(names => resolve(data.names = names.map(name => ({id: name.id, value: name.displayValue}))))
                        .catch(err => reject(console.log(err)))
                })
            );

            promises.push(
                new Promise(function (resolve, reject) {
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
                new Promise(function (resolve, reject) {
                    outfit.getDescription()
                        .then(descriptions => resolve(
                            data.description = {id: descriptions[0].id, value: descriptions[0].description}
                        ))
                        .catch(err => reject(console.log(err)))
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
            res
                .status(400)
                .json(error)
            ;
        });
};
