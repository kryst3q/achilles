'use strict';

const path = require('path');
const uploader = require(path.join(__dirname, '..', '..', 'services', 'uploader'));

module.exports.action = async (req, res) => {
    if (req.busboy) {
        req.busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            uploader.upload(fieldname, file, filename, encoding, mimetype)
                .then(file => res.status(201).json(file));
        });
    }
};
