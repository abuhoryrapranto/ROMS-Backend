const express = require('express')
const app = express()
var v1Router = express.Router()
var categoryController = require('../controllers/CategoryController')

v1Router.get('/all', categoryController.getAllCategories)
v1Router.post('/save', categoryController.saveCategory)
v1Router.put('/update/:id', categoryController.updateCategory)

const v1CategoryRoutes = app.use(v1Router);

module.exports = v1CategoryRoutes