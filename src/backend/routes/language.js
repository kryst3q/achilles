'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();
const models = require(path.join(__dirname, '..', 'models'));

router.get('/list', (req, res, next) => {
    models.Language.findAll().then(languages => {
        res.json(languages);
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
