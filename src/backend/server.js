'use strict';

const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use('/', require(path.join(__dirname, 'routes')));

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('ok', port);
    }
});

// const dbPath = '/home/krystian/web/achilles.sqlite';
//
// if (fs.existsSync(dbPath)) {
//     const sqlite = require('sqlite3');
//     const db = new sqlite.Database(dbPath);
// }
//
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('achilles', '', '', {
//     host: 'localhost',
//     dialect: 'sqlite',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     storage: dbPath
// });
//
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
