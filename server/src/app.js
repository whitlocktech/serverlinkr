const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const path = require('path')

const app = express()

const apiRouter = require('./routes/api')

app.use(cors(
  {
    origin: 'http://localhost:3000'
  }
))

app.use(helmet())

app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', apiRouter)

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app