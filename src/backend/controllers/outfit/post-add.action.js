'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    // const body = req.body;
    // const description = models.OutfitDescription.create(body.Description)
    //     .then(() => description)
    //     .catch(err => res.status(400).json(err));
    // const names = body.Names.map(Name => models.OutfitName.create(Name).spread((name, created) => name));
    // const images = body.Files;
    //
    // models.Outfit.create()
    //     .then(outfit => {
    //
    //     })
    //     .then(outfit => {
    //         res
    //             .status(201)
    //             .json(outfit);
    //     })
    //     .catch(err => {
    //         res
    //             .status(400)
    //             .json(err);
    //     });
};
