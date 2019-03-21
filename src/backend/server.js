'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const lumie = require('lumie');
const busboy = require('connect-busboy');

const port = 8080;
const app = express();

app.use(cors());
app.use(busboy());

lumie.load(app, {
    preURL: 'api',
    verbose: true,
    ignore: ['*.spec', '*.action'],
    controllers_path: path.join(__dirname, 'controllers')
});

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('ok', port);
    }
});
