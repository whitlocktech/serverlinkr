const {
    createUser,
} = require('../../../models/user.model')

async function httpCreateUser(req, res) {
  try {
    const { username, password, role } = req.body
    const user = await createUser(username, password, role)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {httpCreateUser}