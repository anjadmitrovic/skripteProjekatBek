'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Termin, Recenzije}) {
      this.hasMany(Termin, {
        foreignKey:"userId",
        as:"termins"
      })
      this.hasMany(Recenzije, {
        foreignKey:"userId",
        as:"recenzijes"
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    privilegija: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};