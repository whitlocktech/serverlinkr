const express = require('express')

const v1Router = express.Router()

const linksRouter = require('./links/links.routes')
const authRouter = require('./auth/auth.routes')

v1Router.use('/links', linksRouter)
v1Router.use('/auth', authRouter)


module.exports = v1Router