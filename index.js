const chalk = require('chalk');
const express = require('express');
const JsonDB = require('node-json-db');

const config = require('./core/config.js');
const logger = require('./core/log.js');



/* Set database and express properties */
const db = new JsonDB("database", true, true);

const app = express();
app.use(express.static('public'));



/* Start HTTP & API server */
app.listen(config.http_port);
logger.log(logger.INFO, 'General', `Server started at 0.0.0.0:${config.http_port}`);