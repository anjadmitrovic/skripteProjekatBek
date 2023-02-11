'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lokacije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Termin, Igraonica}) {
      this.belongsTo(Termin, {
        foreignKey: "terminId",
        as:"termin"
      })
      this.belongsTo(Igraonica, {
        foreignKey: "igraonicaId",
        as:"igraonica"
      })
    }
  }
  Lokacije.init({
    adresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lokacije',
  });
  return Lokacije;
};