'use strict'

const express = require ('express');
const cors = require ('cors');
const { validateName } = require('./middleware/validator.js');
const { logger } = require('./middleware/logger.js');
const handleNotFound = require('./error-handlers/404.js');
const handleServerError = require('./error-handlers/500.js');

const app = express();
app.use(cors());
app.use(logger);

app.use((req, res, next) => {
    console.log('Express Server Accessed');
    next();
});

app.get('/person', validateName, (req, res) => {
    const name = req.query.name;
    res.json({ 'name': name });
});

app.use(handleNotFound);
app.use(handleServerError);


module.exports = app;