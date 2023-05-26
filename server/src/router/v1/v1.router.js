const express = require('express')

const v1Router = express.Router()

const linksRouter = require('./links/links.routes')

v1Router.use('/links', linksRouter)


module.exports = v1Router