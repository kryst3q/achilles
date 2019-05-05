'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Image.findAll({
        include: [
            models.File
        ]
    })
        .then(images => {
            res
                .status(200)
                .json(images)
            ;
        })
        .catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
