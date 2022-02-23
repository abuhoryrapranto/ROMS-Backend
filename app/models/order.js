'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Menu }) {
      this.belongsTo(Menu, {foreignKey: 'menuId' });
    }
  };
  Order.init({
    uuid: DataTypes.UUID,
    orderId: DataTypes.STRING,
    customerName: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    customerAddress: DataTypes.TEXT,
    menuId: DataTypes.INTEGER,
    variant: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};