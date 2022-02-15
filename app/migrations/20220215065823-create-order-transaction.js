'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderTransactions', {
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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Orders', key: 'id' }
      },
      grossAmount: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
      },
      vat: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true,
      },
      serviceCharge: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true,
      },
      netAmount: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
      },
      paymentType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentStatus: {
        type: Sequelize.ENUM('paid', 'unpaid', 'canceled'),
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
    await queryInterface.dropTable('OrderTransactions');
  }
};