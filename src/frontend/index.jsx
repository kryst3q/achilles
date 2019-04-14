import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-widgets/dist/css/react-widgets.css';
import axios from 'axios';
import i18n from './i18n.js';

axios.defaults.baseURL = 'http://localhost:8080/api';

// /* Potrzebne, żeby dostać się do funkcji electrona chyba */
// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer = electron.ipcRenderer;

Moment.locale('pl');
momentLocalizer();

ReactDOM.render(
    (
        <App />
    ),
    document.getElementById('app')
);
