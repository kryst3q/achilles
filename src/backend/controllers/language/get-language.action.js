'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.getAll = (req, res) => {
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

module.exports.getOne = (req, res) => {
    models.Language.findByPk(req.params.id)
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
