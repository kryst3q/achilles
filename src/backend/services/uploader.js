'use strict';

const path = require('path');
const os = require('os');
const crypto = require('crypto');
const fs = require('fs');
const models = require(path.join(__dirname, '..', 'models'));

/*
 * TODO refactorize: slice this monolith into smaller pieces
 */
module.exports.upload = (fieldname, file, filename, encoding, mimetype) => {
    return new Promise((resolve, reject) => {
        /* Temporary save file to tmp dir */
        const saveTo = path.join(os.tmpdir(), path.basename(filename));
        const tmpWriteStream = fs.createWriteStream(saveTo);
        file.pipe(tmpWriteStream);

        tmpWriteStream.on('close', () => {
            const tmpReadStream = fs.createReadStream(saveTo);
            let hash = crypto.createHash('md5');

            tmpReadStream.on('data', (data) => {
                hash.update(data);
            });

            tmpReadStream.on('end', () => {
                const hashString = hash.digest('hex');
                const moveTo = path.join('public', 'uploads', hashString);

                if (fs.existsSync(moveTo)) {
                    models.File.findOne({
                        where: {
                            hash: hashString
                        }
                    })
                        .then(file => resolve(file));
                } else {
                    const tmpReadStream = fs.createReadStream(saveTo);
                    const finalWriteStream = fs.createWriteStream(moveTo);
                    tmpReadStream.pipe(finalWriteStream);

                    finalWriteStream.on('close', () => {
                        fs.unlinkSync(saveTo);

                        models.File.create({
                            hash: hashString,
                            name: filename.slice(0, filename.indexOf('.')),
                            extension: filename.slice(filename.indexOf('.') + 1),
                            mimeType: mimetype
                        })
                            .then(file => resolve(file))
                            .catch(err => reject(err));
                    });
                }
            });
        });
    });
};
