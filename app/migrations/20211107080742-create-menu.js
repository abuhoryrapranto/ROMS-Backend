'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Categories', key: 'id' }
      },
      variants: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mainPrice: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
      },
      offerPrice: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Menus');
  }
};