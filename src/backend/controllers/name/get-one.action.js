'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Name.findByPk(req.params.id)
        .then(name => {
            res
                .status(200)
                .json(name)
            ;
        }).catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
