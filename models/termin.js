'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Termin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tretman, User, Placanje, Lokacije}) {
      this.belongsTo(Tretman, {
        foreignKey: "tretmanId",
        as:"tretman"
      })
      this.belongsTo(User, {
        foreignKey:"userId",
        as:"user"
      })
      this.hasMany(Placanje, {
        foreignKey:"terminId",
        as:"placanjes"
      })
      this.hasMany(Lokacije, {
        foreignKey:"terminId",
        as:"lokacijes"
      })
    }
  }
  Termin.init({
    dan: DataTypes.STRING,
    vreme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Termin',
  });
  return Termin;
};