'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Outfit.create(req.data, {})
        .then(outfit => {
            res
                .status(201)
                .json(outfit);
        })
        .catch(err => {
            res
                .status(400)
                .json(err);
        });
};
