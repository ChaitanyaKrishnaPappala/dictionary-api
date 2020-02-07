const axios = require('axios')
const {baseUrl} = require('./config')
require('dotenv').config()
const client = axios.create({baseURL: baseUrl})
client.interceptors.request.use(config => {
  config.headers = {Authorization: process.env.AUTH, Accept: 'application/json'}
  return config
})
module.exports = {client}
