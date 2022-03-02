const express = require('express')
const app = express()
var v1Router = express.Router()
var cashBoxController = require('../controllers/CashBoxController')

v1Router.post('/open', cashBoxController.openCashBox);

const v1CashBoxRoutes = app.use(v1Router);

module.exports = v1CashBoxRoutes