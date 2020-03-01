/* Conexão com o servidor node */
const express = require('express')

const app = express()

require('./controllers/authController')(app)

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.listen(3000, () => console.log('Server running...'))