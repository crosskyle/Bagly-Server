//const app = require('./app')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 3050
app.listen(PORT)
