'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Outfit.findByPk(req.params.id)
        .then(outfit => {
            res
                .status(200)
                .json(outfit)
            ;
        })
        .catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
