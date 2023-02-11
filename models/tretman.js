'use strict';
const {
  Model
} = require('sequelize');
const proizvodi = require('./proizvodi');
module.exports = (sequelize, DataTypes) => {
  class Tretman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Kozmeticarka, Proizvodi, Termin, Akcije}){
      this.belongsTo(Kozmeticarka,{
        foreignKey:"kozmeticarkaId",
        as:"kozmeticarka"
      })
      this.belongsTo(Proizvodi, {
        foreignKey:"proizvodId",
        as:"proizvodi"
      })
      this.hasMany(Termin, {
        foreignKey:"tretmanId",
        as:"termins"
      })
      this.hasMany(Akcije, {
        foreignKey:"tretmanId",
        as:"akcijes"
      })
    }
  }
  Tretman.init({
    ime: DataTypes.STRING,
    vrsta: DataTypes.STRING,
    cena: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tretman',
  });
  return Tretman;
};