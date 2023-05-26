const express = require('express')

const {
  httpCreateLink,
  httpGetAllLinks,
  httpUpdateLink,
  httpDeleteLink,
  httpGetLinkById,
  httpGetLinksByKeyword,
} = require('./links.controller')

const linksRouter = express.Router()

linksRouter.post('/', httpCreateLink)
linksRouter.get('/', httpGetAllLinks)
linksRouter.patch('/', httpUpdateLink)
linksRouter.delete('/:id', httpDeleteLink)
linksRouter.get('/:id', httpGetLinkById)
linksRouter.get('/keyword/:keyword', httpGetLinksByKeyword)

module.exports = linksRouter