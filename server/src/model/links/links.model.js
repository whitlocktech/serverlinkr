const linksDatabase = require('./links.mongo')

async function getAllLinks() {
  return linksDatabase
    .find({})
    .sort({ _id: 1 })
    .catch((error) => {
      console.error(error)
      return []
    })
}

async function saveLink(link) {
  return linksDatabase.findOneAndUpdate({
    _id: link._id,
  }, link, {
    upsert: true,
  })
}

async function createLink(link) {
  const newLink = new linksDatabase(link)
  await newLink.save()
}

async function updateLink(link) { 
  await saveLink(link)
}

async function deleteLink(link) {
  return linksDatabase.deleteOne({
    _id: link._id,
  })
}

async function getLinkById(id) {
  return linksDatabase.findOne({
    _id: id,
  })
}
async function getLinksByKeyword(keyword) {
  return linksDatabase.find({
    keywords: keyword,
  })
}

module.exports = {
  getAllLinks,
  createLink,
  updateLink,
  deleteLink,
  getLinkById,
  getLinksByKeyword,
}