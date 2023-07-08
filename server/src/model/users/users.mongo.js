const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 32,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxLength: 64,
    trim: true,
  },
})

userSchema.pre('save', async function (next) { 
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) { 
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (password) { 
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) { 
    throw error
  }
}

module.exports = mongoose.model('User', userSchema)