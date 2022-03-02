'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderHistory.init({
    uuid: DataTypes.UUID,
    code: DataTypes.STRING,
    customerName: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    customerAddress: DataTypes.TEXT,
    tableNumber: DataTypes.INTEGER,
    deliveryPerson: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderHistory',
  });
  return OrderHistory;
};