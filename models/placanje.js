'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Placanje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Termin}) {
      this.belongsTo(Termin, {
        foreignKey: "terminId",
        as:"termin"
      })
    }
  }
  Placanje.init({
    iznos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Placanje',
  });
  return Placanje;
};