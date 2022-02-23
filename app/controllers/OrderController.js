const orderService = require('../services/OrderService');

async function saveOrder(req, res) {
    await orderService.saveOrder(req, res);
}

module.exports = {
    saveOrder : saveOrder
}