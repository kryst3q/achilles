'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Image.update(
        {
            author: req.body.author,
            name: req.body.name,
            description: req.body.description,
            originPlace: req.body.originPlace,
            storingPlace: req.body.storingPlace,
            originDate: req.body.originDate
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(result => {
            res
                .status(201)
                .json({ result: result });
        })
        .catch(e => {
            res
                .status(400)
                .json(e);
        });
};
