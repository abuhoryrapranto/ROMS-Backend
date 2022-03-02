const orderService = require('../services/OrderService');

async function saveOrder(req, res) {
    return await orderService.saveOrder(req, res);
}

async function orderStatusChange(req, res) {
    return await orderService.orderStatusChange(req, res);
}

module.exports = {
    saveOrder : saveOrder,
    orderStatusChange: orderStatusChange
}