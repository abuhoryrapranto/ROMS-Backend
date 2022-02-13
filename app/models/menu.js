'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, {foreignKey: 'categoryId' });
    }

    toJSON() {
      return {...this.get(), categoryId: undefined}
    }
  };
  Menu.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    variants: DataTypes.STRING,
    mainPrice: DataTypes.DECIMAL,
    offerPrice: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};