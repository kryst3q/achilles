'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    const body = req.body;

    models.Outfit.create()
        .then(outfit => body.Names.map(name => models.Name.findByPk(name.id).then(Name => Name.addOutfit(outfit)).catch(err => err)))
        .then(outfit => body.Images.map(image => models.Image.findByPk(image.id).then(Image => Image.addOutfit(outfit)).catch(err => err)))
        .then(outfit => models.OutfitDescription.create({...body.Description, OutfitId: outfit.id}).then(description => description))
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
