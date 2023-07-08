const User = require('../../../model/users/users.model')
const generateToken = require('../../../utils/auth').generateToken
const passport = require('../../../utils/auth').passport

async function register(req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await User.createUser(username, password);
    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while registering user' });
  }
}

async function login(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      if (!info || !info.message) {
        return res.status(400).json({ message: 'Invalid username or password.' });
      }
      return res.status(400).json({ message: info.message });
    }

    try {
      const token = generateToken(user);
      return res.json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  })(req, res, next);
}


async function logout(req, res, next) { 
  try {
    req.logout()
    res.json({ message: 'Logout successfully.' })
  } catch (error) { 
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  register,
  login,
  logout,
}