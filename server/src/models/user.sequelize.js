const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  }
})

User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  user.password = hashedPassword
})

module.exports = User