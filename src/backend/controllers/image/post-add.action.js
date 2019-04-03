'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    if (req.busboy) {
        req.busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            Promise.resolve(uploader.upload(fieldname, file, filename, encoding, mimetype))
                .then(file => file)
                .then(file => models.Image.create({ File: file }).then(image => res.status(201).json(image)))
                .catch(err => res.status(400).json(err));
        });
    }
};
