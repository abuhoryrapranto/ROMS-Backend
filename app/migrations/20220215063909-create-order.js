'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      orderId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customerPhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customerAddress: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Menus', key: 'id' }
      },
      variant: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(5,2),
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
    await queryInterface.dropTable('Orders');
  }
};