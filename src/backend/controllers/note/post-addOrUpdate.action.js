'use strict';

const path = require('path');
const models = require(path.join(__dirname, '..', '..', 'models'));
const { body, validationResult } = require('express-validator/check');

module.exports.middlewares = [
    body('title')
        .exists().withMessage((value, { req }) => {
            return req.t('noteController:postAddOrUpdate:title:required');
        })
        .not().isEmpty().withMessage((value, { req }) => {
            return req.t('noteController:postAddOrUpdate:title:empty');
        })
];

module.exports.action = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array({ onlyFirstError: true })
            });
    }

    const noteData = {
        title: req.body.title,
        content: req.body.content
    };

    models.Note.findOrCreate({
        where: {
            id: req.body.id
        },
        defaults: noteData
    })
        .then(([note, created]) => {
            if (created) {
                return note;
            } else {
                return note.update(noteData).then((note) => note);
            }
        })
        .then(note => {
            res
                .status(201)
                .json(note.get({ plain: true }));
        })
        .catch(err => {
            res
                .status(400)
                .json(err);
        });
};
