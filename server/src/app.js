const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const MongoStore = require('connect-mongo')
const session = require('express-session')
require('dotenv').config()

const { passport } = require('./utils/auth')

const apiRouter = require('./router/api.router')

const app = express()

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: 'sessions',
    }),
  }),
)
app.use(passport.initialize())
app.use(passport.session())

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', apiRouter)

app.get('*', (req, res) => { 
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app