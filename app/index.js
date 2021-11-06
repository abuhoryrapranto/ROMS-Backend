const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config()
const port = process.env.PORT || 5000
const authRoutes = require('./routes/auth')

app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})