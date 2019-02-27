'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

fs.readdirSync(__dirname).filter(file => file !== 'index.js').forEach(file => {
    router.use('/' + file.substr(0, file.indexOf('.')), require(path.join(__dirname, file)));
});

module.exports = router;
