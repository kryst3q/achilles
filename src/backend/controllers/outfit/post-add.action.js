'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    const body = req.body;

    models.Outfit.create()
        .then(outfit => Promise.all(body.Images.map(image => models.Image.findByPk(image.id).then(Image => Image.addOutfit(outfit)))).then(() => outfit))
        .then(outfit => Promise.all(body.Names.map(name => models.Name.findByPk(name.id).then(Name => Name.addOutfit(outfit)))).then(() => outfit))
        .then(outfit => models.OutfitDescription.create({...body.Description, OutfitId: outfit.id}))
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
