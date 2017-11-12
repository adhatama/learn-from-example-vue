'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_HOST: 'http://kgcb.adhatama.com/public/api/v1'
  // API_HOST: '"https://newsapi.org/v1"'
  // Use double quote for string value
  API_HOST: '"https://reqres.in/api"'
})
