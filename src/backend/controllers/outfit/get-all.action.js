'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
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
