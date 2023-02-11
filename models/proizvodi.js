'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proizvodi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tretman}) {
      this.hasMany(Tretman, {
        foreignKey:"proizvodId",
        as:"tretmans"
      })
    }
  }
  
  Proizvodi.init({
    ime: DataTypes.STRING,
    namena: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proizvodi',
  });
  return Proizvodi;
};