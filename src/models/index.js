'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PeopleSchema = require('./people'); 
const SportSchema = require('./sport');
const Collection = require('./Collection.js');

let sequelize = new Sequelize(DATABASE_URL);

const People = PeopleSchema(sequelize, DataTypes);
const Sport = SportSchema(sequelize, DataTypes);

People.hasMany(Sport, {foreignKey: 'peopleId', sourceKey: 'id' });
Sport.belongsTo(People, {foreignKey: 'peopleId', targetKey: 'id'});

module.exports = {
  People,
  Sport,
  sequelize,
  Collection,
}