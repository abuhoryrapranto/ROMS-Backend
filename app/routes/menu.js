const express = require('express')
const app = express()
var v1Router = express.Router()
var menuController = require('../controllers/MenuController')

v1Router.get('/all', menuController.getAllMenus)
v1Router.post('/save', menuController.saveMenu)
v1Router.put('/update/:id', menuController.updateMenu)

const v1MenuRoutes = app.use(v1Router);

module.exports = v1MenuRoutes