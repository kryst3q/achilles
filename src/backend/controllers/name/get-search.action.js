'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const Op = models.sequelize.Op;

module.exports.action = (req, res) => {
    models.Name.findAll({
        where: {
            searchValue: {
                [Op.like]: '%' + req.query.term + '%'
            }
        }
    })
        .then(names => {
            res
                .status(200)
                .json(names)
            ;
        }).catch(error => {
            res
                .status(400)
                .json(error)
            ;
        });
};
