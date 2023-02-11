'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kozmeticarka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tretman}) {
      this.hasMany(Tretman, {
        foreignKey:"kozmeticarkaId",
        as:"tretmans"
      })
    }
  }
  Kozmeticarka.init({
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    vrstaUsluge: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kozmeticarka',
  });
  return Kozmeticarka;
};