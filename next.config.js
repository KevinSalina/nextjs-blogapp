require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  development: {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    secret: process.env.SECRET
  },
  production: {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    secret: process.env.SECRET
  }
}
