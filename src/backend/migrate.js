'use strict';

const path = require('path');
const models = require(path.join(__dirname, 'models'));
const sequelize = models.sequelize;

sequelize.sync({
    force: true
});
