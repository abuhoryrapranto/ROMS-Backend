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
    code: DataTypes.STRING,
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