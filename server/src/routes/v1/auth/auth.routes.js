const express = require('express')
const { httpCreateUser } = require('./auth.controller')

const authRouter = express.Router()

authRouter.post('/register', httpCreateUser)

module.exports = authRouter
