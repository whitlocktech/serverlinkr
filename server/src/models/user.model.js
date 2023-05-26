const User = require('./user.sequelize')

async function createUser(username, password, role) {
  try {
    const user = await User.create({
      username, password, role
    })
    return user
  } catch (error) {
    throw new Error('Error Creating User', error)
  }
}

module.exports = createUser