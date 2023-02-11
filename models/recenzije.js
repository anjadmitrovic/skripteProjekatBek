'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recenzije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, {
        foreignKey: "userId",
        as:"user"
      })
    }
  }
  Recenzije.init({
    komentar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recenzije',
  });
  return Recenzije;
};