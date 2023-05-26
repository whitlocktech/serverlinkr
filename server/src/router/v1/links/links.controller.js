const {
  createLink,
  getAllLinks,
  updateLink,
  deleteLink,
  getLinkById,
  getLinksByKeyword,
} = require('../../../model/links/links.model')

async function httpCreateLink(req, res) {
  const link = req.body

  if (!link.title || !link.url) {
    res.status(400).send({
      error: 'Missing required fields: title and url',
    })
  }

  link.updatedAt = new Date(link.updatedAt)
  if (isNaN(link.updatedAt)) {
    return res.status(400).json({
      error: 'Invalid date format for updatedAt',
    })
  }

  await createLink(link)
  return res.status(201).json(link)
}

async function httpGetAllLinks(req, res) {
  const links = await getAllLinks()
  return res.status(200).json(links)
}

async function httpUpdateLink(req, res) { 
  const link = req.body

  if (!link._id) {
    return res.status(400).json({
      error: 'Missing required fields: _id',
    })
  }

  link.updatedAt = new Date(link.updatedAt)
  if (isNaN(link.updatedAt)) {
    return res.status(400).json({
      error: 'Invalid date format for updatedAt',
    })
  }

  await updateLink(link)
  return res.status(200).json(link)
}

async function httpDeleteLink(req, res) { 
  const link = req.body

  if (!link._id) {
    return res.status(400).json({
      error: 'Missing required fields: _id',
    })
  }

  await deleteLink(link)
  return res.status(200).json(link)
}

async function httpGetLinkById(req, res) {
  const id = req.params.id
  const link = await getLinkById(id)
  return res.status(200).json(link)
}

async function httpGetLinksByKeyword(req, res) {
  const keyword = req.params.keyword
  const links = await getLinksByKeyword(keyword)
  return res.status(200).json(links)
}

module.exports = {
  httpCreateLink,
  httpGetAllLinks,
  httpUpdateLink,
  httpDeleteLink,
  httpGetLinkById,
  httpGetLinksByKeyword,
}