'use strict';

const { sequelize, People, Sport } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

describe('People Model', () => {
  test('Should create a person row', async () => {
    const testPeople = await People.create({
      name: 'emmitt smith',
      eyeColor: 'brown',
      age: 50,
      weight: 215,
    });

    expect(testPeople.name).toEqual('emmitt smith');
    expect(testPeople.eyeColor).toEqual('brown');
    expect(testPeople.age).toEqual(50);
    expect(testPeople.weight).toEqual(215);
  });

  test('Should create a sport row', async () => {
    const testSport = await Sport.create({
      name: 'football',
      type: 'contact',
      fanBase: 500000,
      yearsActive: 35,
    });

    expect(testSport.name).toEqual('football');
    expect(testSport.type).toEqual('contact');
    expect(testSport.fanBase).toEqual(500000);
    expect(testSport.yearsActive).toEqual(35);
  });


});