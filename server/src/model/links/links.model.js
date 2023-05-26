const linksDatabase = require('./links.mongo')

async function getAllLinks() {
  return await linksDatabase
    .find({})
    .sort({ _id: 1 })
    .catch((error) => {
      console.error(error)
      return []
    })
}

async function saveLink(link) {
  await linksDatabase.findOneAndUpdate({
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
  await linksDatabase.deleteOne({
    _id: link._id,
  })
}

async function getLinkById(id) {
  return await linksDatabase.findOne({
    _id: id,
  })
}
async function getLinksByKeyword(keyword) {
  return await linksDatabase.find({
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