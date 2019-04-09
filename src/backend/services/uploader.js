'use strict';

const path = require('path');
const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const models = require(path.join(__dirname, '..', 'models'));

/*
 * TODO handle error when image was already uploaded
 */
module.exports.upload = (fieldname, file, filename, encoding, mimetype) => {
    return new Promise((resolve, reject) => {
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
                }).then(file => resolve(file));
            } else {
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
                    .then(file => resolve(file))
                    .catch(err => reject(err));
            }
        });
    });
};
