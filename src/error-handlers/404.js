'use strict'


function handleNotFound(req, res) {
    res.status(404).send('404 Not Found');
}

module.exports = handleNotFound;
