'use strict'

const express = require ('express');
const cors = require ('cors');
const { validateName } = require('./middleware/validator.js');
const { logger } = require('./middleware/logger.js');
const handleNotFound = require('./error-handlers/404.js');
const handleServerError = require('./error-handlers/500.js');
const peopleRouter = require('./routes/people.js');
const sportRouter = require('./routes/sport.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
    console.log('Express Server Accessed');
    next();
});

app.get('/person', validateName, (req, res) => {
    const name = req.query.name;
    res.json({ 'name': name });
});


app.use(peopleRouter);
app.use(sportRouter);
app.use(handleNotFound);
app.use(handleServerError);


module.exports = app;