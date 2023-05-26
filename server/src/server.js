const http = require('http')
require('dotenv').config()

const app = require('./app')

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

async function startServer() {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    throw new Error('Error Starting Server', error)
  }
}

startServer()