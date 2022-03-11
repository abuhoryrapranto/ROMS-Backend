const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()
const port = process.env.PORT || 5000
const { auth } = require('./middlewares/auth')
const authRoutes = require('./routes/auth')
const menuRoutes = require('./routes/menu')
const categoryRoutes = require('./routes/category')
const userRoutes = require('./routes/user')
const orderRoutes = require('./routes/order')
const cashBoxRoutes = require('./routes/cashbox')

app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/cash-boxes', cashBoxRoutes);
app.use('/api/v1/menus', auth, menuRoutes);
app.use('/api/v1/categories', auth, categoryRoutes);
app.use('/api/v1/user', auth, userRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})