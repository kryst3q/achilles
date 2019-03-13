'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.getAll = (req, res) => {
    models.Outfit.findAll()
        .then(outfits => {
            res
                .status(200)
                .json(outfits)
            ;
        })
        .catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};

module.exports.getOne = (req, res) => {
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
