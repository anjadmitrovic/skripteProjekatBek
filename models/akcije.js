'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Akcije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tretman}) {
      this.belongsTo(Tretman, {
        foreignKey: "tretmanId",
        as:"tretman"
      })
    }
  }
  Akcije.init({
    popust: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Akcije',
  });
  return Akcije;
};