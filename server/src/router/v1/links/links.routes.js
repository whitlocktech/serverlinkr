const express = require('express')

const {
  httpCreateLink,
  httpGetAllLinks,
  httpUpdateLink,
  httpDeleteLink,
  httpGetLinkById,
  httpGetLinksByKeyword,
} = require('./links.controller')

const { isLoggedIn } = require('../../../utils/auth')  

const linksRouter = express.Router()

linksRouter.post('/', isLoggedIn, httpCreateLink)
linksRouter.get('/', httpGetAllLinks)
linksRouter.patch('/', isLoggedIn, httpUpdateLink)
linksRouter.delete('/:id', isLoggedIn, httpDeleteLink)
linksRouter.get('/:id', httpGetLinkById)
linksRouter.get('/keyword/:keyword', httpGetLinksByKeyword)

module.exports = linksRouter