const userDatabase = require('./users.mongo')

async function createUser(username, password) { 
  try {
    const user = new userDatabase({
      username,
      password,
    })
    const savedUser = await user.save()
    return savedUser
  } catch (error) { 
    throw error
  }
}

async function getUserByUsername(username) { 
  try {
    return await userDatabase.findOne(username)
  } catch (error) { 
    throw error
  }
}

async function getUserById(id) { 
  try {
    return await userDatabase.findById(id)
  } catch (error) { 
    throw error
  }
}

module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
}