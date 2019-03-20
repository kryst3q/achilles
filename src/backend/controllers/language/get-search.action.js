'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const Op = models.sequelize.Op;
const { param } = require('express-validator/check');

/*
 * TODO: make this work!
 */
module.exports.middlewares = [
    //
];

module.exports.action = (req, res) => {
    console.log(req);
    models.Language.findAll({
        where: {
            name: {
                [Op.like]: '%' + req.query.term + '%'
            }
        }
    })
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
