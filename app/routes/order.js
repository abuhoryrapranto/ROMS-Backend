const express = require('express')
const app = express()
var v1Router = express.Router()
var orderController = require('../controllers/OrderController')

v1Router.post('/save-order', orderController.saveOrder);
v1Router.put('/staus-change', orderController.orderStatusChange);

const V1OrderRoutes = app.use(v1Router);

module.exports = V1OrderRoutes