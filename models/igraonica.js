'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Igraonica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Lokacije}) {
      this.hasMany(Lokacije, {
        foreignKey:"igraonicaId",
        as:"lokacijes"
      })
    }
  }
  Igraonica.init({
    ime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Igraonica',
  });
  return Igraonica;
};