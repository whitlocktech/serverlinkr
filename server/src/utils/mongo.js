const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL

if (MONGO_URL.length === 0) {
  console.error('MONGO_URL environment variable is not set')
} 

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => { 
  console.error('Mongoose Connection Error', err)
})

async function mongoConnect() {
  mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() { 
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect
}