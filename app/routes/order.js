const express = require('express')
const app = express()
var v1Router = express.Router()
var orderController = require('../controllers/OrderController')

v1Router.post('/save-order', orderController.saveOrder)

const V1OrderRoutes = app.use('/v1/order', v1Router);

module.exports = V1OrderRoutes