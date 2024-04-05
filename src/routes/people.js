'use strict';

const express = require('express');
const { People, Collection } = require('../models');

const router = express.Router();

const CustomerCollection = new Collection(People);


//Get All Records - Method: GET
router.get('/people', async(req, res) => {
    let records = await  CustomerCollection.read();
    res.json(records);
});

//Get One Record - Method: GET
router.get('/people/:id', async(req, res) => {
    let records = await CustomerCollection.read(req.params.id);
    res.json(records);
});

//Add a Record - Method: POST
router.post('/people', async(req, res) => {
    let records = await CustomerCollection.create(req.body);
    res.json(records)
});

// Update a Record - Method: PUT
router.put('/people/:id', async(req, res) => {
    let records = await CustomerCollection.update(req.params.id, req.body);
    res.json(records);
});

//Delete a Record - Method: DELETE
router.delete('/people/:id', async(req, res) => {
    let records = await CustomerCollection.delete(req.params.id);
    res.json(records);
});

module.exports = router;