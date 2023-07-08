const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')
const User = require('../model/users/users.model')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

passport.use(
  new LocalStrategy(async (username, password, done) => { 
    try {
      const user = await User.getUserByUsername(username)
      if (!user) { 
        return done(null, false, { message: 'Incorrect username or password.'})
      }
      const isPasswordValid = await user.isValidPassword(password)

      if (!isPasswordValid) { 
        return done(null, false, { message: 'Incorrect username or password.'})
      }
      return done(null, user, { message: 'Logged in successfully.'})
    } catch (error) { 
      return done(error)
    }
  })
)

passport.serializeUser((user, done) => { 
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => { 
  try {
    const user = await User.getUserById(id)
    done(null, user)
  } catch (error) { 
    done(error)
  }
})

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  }

  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {
  passport,
  generateToken,
}

