'use strict';

const express = require('express');
const { Sport, Collection } = require('../models');

const router = express.Router();

const CustomerCollection = new Collection(Sport);


//Get All Records - Method: GET
router.get('/sport', async(req, res) => {
    let records = await CustomerCollection.read();
    res.json(records);
});

//Get One Record - Method: GET
router.get('/sport/:id', async(req, res) => {
    let records = await CustomerCollection.read(req.params.id);
    res.json(records);
});

//Add a Record - Method: POST
router.post('/sport', async(req, res) => {
    let records = await CustomerCollection.create(req.body);
    res.json(records);
});

// Update a Record - Method: PUT
router.put('/sport/:id', async(req, res) => {
    let records = await CustomerCollection.update(req.params.id, req.body);
    res.json(records);
});

//Delete a Record - Method: DELETE
router.delete('/sport/:id', async(req, res) => {
    let records = await CustomerCollection.delete(req.params.id);
    res.json(records); 
});

module.exports = router;