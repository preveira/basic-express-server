'use strict';

const Sport = (sequelize, DataTypes) => sequelize.define('Sport', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    fanBase: DataTypes.INTEGER,
    yearsActive: DataTypes.INTEGER,
});

module.exports = Sport;