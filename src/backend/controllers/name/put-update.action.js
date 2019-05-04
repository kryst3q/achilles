'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Name.update(
        {
            displayValue: req.body.displayValue,
            searchValue: req.body.searchValue
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(name => {
            res
                .status(201)
                .json(name);
        })
        .catch(e => {
            res
                .status(400)
                .json(e);
        });
};
