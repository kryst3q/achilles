'use strict';

const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.json({
        result: 'ok'
    });
});

module.exports = router;
