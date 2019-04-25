'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Name.findAll({
        where: {
            LanguageId: req.query.LanguageId
        }
    })
        .then(names => {
            res
                .status(200)
                .json(names)
            ;
        })
        .catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
