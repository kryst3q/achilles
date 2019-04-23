'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const lumie = require('lumie');
const busboy = require('connect-busboy');
const bodyParser = require('body-parser');
const i18next = require("i18next");
const i18nextMiddleware = require('i18next-express-middleware');
const i18nextBackend = require('i18next-node-fs-backend');

/*
 * TODO move i18next config to separate file
 */
i18next
    .use(i18nextMiddleware.LanguageDetector)
    .use(i18nextBackend)
    .init({
        debug: false,
        load: 'current',
        fallbackLng: 'en',
        lowerCaseLng: true,
        ns: [
            'outfitController',
            'languageController',
            'noteController'
        ],
        backend: {
            loadPath: path.join(__dirname, '..', '..', 'public', 'locales', '{{lng}}', '{{ns}}.json')
        }
    });

/*
 * TODO hardcode or add managing port number for server
 */
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

/*
 * TODO manage success & failure of starting express
 */
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('ok', port);
    }
});
