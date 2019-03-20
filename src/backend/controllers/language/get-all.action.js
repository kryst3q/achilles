'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Language.findAll()
        .then(languages => {
            res
                .status(200)
                .json(languages)
            ;
        }).catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
