'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const lumie = require('lumie');
const busboy = require('connect-busboy');
const bodyParser = require('body-parser');
const i18next = require("i18next");
const i18nextMiddleware = require("i18next-express-middleware");

i18next
    .use(i18nextMiddleware.LanguageDetector)
    .init({ resGetPath: 'locales/__lng__/__ns__.json' });

const port = 8080;
const app = express();

app.use(cors());
app.use(busboy({ immediate: true }));
app.use(bodyParser.json());
app.use(i18nextMiddleware.handle(i18next, {}));

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
