'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  AIP_DOMAIN: '"http://i.xk.kbl.xul.cc"'
})
