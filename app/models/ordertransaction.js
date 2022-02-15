'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderTransaction.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderTransaction',
  });
  return OrderTransaction;
};