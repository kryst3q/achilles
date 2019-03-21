'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const Op = models.sequelize.Op;

module.exports.action = (req, res) => {
    models.Name.findAll({
        where: {
            LanguageId: {
                [Op.eq]: req.param.langId
            }
        }
    })
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
