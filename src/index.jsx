import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-widgets/dist/css/react-widgets.css';

// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer = electron.ipcRenderer;
//
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

Moment.locale('pl');
momentLocalizer();

ReactDOM.render(<App />, document.getElementById('root'));
