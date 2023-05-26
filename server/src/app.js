const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')

const apiRouter = require('./router/api.router')

const app = express()

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', apiRouter)

app.get('*', (req, res) => { 
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app