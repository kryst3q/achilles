'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    const LanguageId = req.query.LanguageId;

    models.Outfit.findAll({
        include: [
            models.Dating,
            {
                model: models.OutfitDescription,
                as: 'Description',
                where: { LanguageId: LanguageId},
                required: false
            },
            {
                model: models.Name,
                as: 'Names',
                where: { LanguageId: LanguageId},
                required: false
            },
            {
                model: models.Image,
                as: 'Images',
                include: [ models.File ]
            }
        ]
    })
        .then(outfits => res.status(200).json(outfits))
        .catch(err => res.status(400).json(err));
};
