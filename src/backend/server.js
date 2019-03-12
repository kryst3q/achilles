'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 8080;
const app = express();

app.use(cors());

app.use('/', require(path.join(__dirname, 'routes')));

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('ok', port);
    }
});
