'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Outfit.create(
        req.body,
        {
            include: [
                {
                    model: models.OutfitDescription,
                    as: 'Description'
                },
                {
                    model: models.OutfitName,
                    as: 'Names',
                    include: [
                        { model: models.Name },
                        { model: models.Outfit }
                    ]
                },
                // {
                //     model: models.Image,
                //     as: 'Images',
                //     include: [
                //         {
                //             association: models.File,
                //             as: 'File'
                //         }
                //     ]
                // }
            ]
        }
    )
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
