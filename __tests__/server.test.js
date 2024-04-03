'use strict';

const supertest = require('supertest');
const app = require('../src/server.js');

const request = supertest(app);


describe('Express Server', () => {
    test('Should respond with a 200 when a valid name is present', async () => {
        let response = await request.get('/person?name=john');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ 'name': 'john' });
    });

    test('Should return a 404 on a bad method', async () => {
        let response = await request.post('/person');
        expect(response.status).toEqual(404);
    });

    test('Should return a 500 when an invalid name is specified', async () => {
        let response = await request.get('/person/');
        expect(response.status).toEqual(500);
    });
});
