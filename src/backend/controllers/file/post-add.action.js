'use strict';

const path = require('path');
const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const models = require(path.join(__dirname, '..', '..', 'models'));

module.exports.action = (req, res) => {
    if (req.busboy) {
        req.busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            /* Temporary save file to tmp dir */
            const saveTo = path.join(os.tmpdir(), path.basename(fieldname));
            file.pipe(fs.createWriteStream(saveTo));

            /* Create file hash */
            const hash = crypto.createHash('md5');
            const tmpFileHandle = fs.createReadStream(saveTo);
            tmpFileHandle.on('data', (data) => {
                hash.update(data);
            });
            tmpFileHandle.on('end', () => {
                const hashString = hash.digest('hex');

                /* Move file from tmp to uploads dir and rename to generated hash */
                const moveTo = path.join('public', 'uploads', hashString);
                
                if (fs.existsSync(moveTo)) {
                    fs.unlink(saveTo);

                    models.File.findOne({
                        where: {
                            hash: hashString
                        }
                    }).then(file => {
                        res
                            .status(400)
                            .json({
                                error: "already exists",
                                existing: file
                            });
                    });

                    return;
                }
                
                const fileHandle = fs.createWriteStream(moveTo);
                tmpFileHandle.pipe(fileHandle);
                tmpFileHandle.on('end', () => { fs.unlink(saveTo); });
                tmpFileHandle.on('error', (err) => { console.log(err); });

                models.File.create({
                    hash: hashString,
                    name: filename.slice(0, filename.indexOf('.')),
                    extension: filename.slice(filename.indexOf('.') + 1),
                    mimeType: mimetype
                })
                    .then(file => {
                        res
                            .status(201)
                            .json(file);
                    })
                    .catch(err => {
                        res
                            .status(400)
                            .json(err);
                    });
            });
        });
    }
};
