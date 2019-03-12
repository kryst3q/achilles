'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();
const models = require(path.join(__dirname, '..', 'models'));

router.get('/list', (req, res, next) => {
    models.Language.findAll().then(languages => {
        res.json(languages.map(l => { return { id: l.code, name: l.name }; }));
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
