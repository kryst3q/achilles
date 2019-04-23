'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    models.Note.findAll()
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(400).json(err));
};
