/* eslint-disable no-undef,@typescript-eslint/no-var-requires */
const { aliasWebpack, aliasJest } = require('react-app-alias')

const options = {}

module.exports = function override(config, env) {
  const modifiedConfig = aliasWebpack(options)(config)
  return modifiedConfig
}

module.exports.jest = function override(config) {
  const modifiedConfig = aliasJest(options)(config)
  return modifiedConfig
}
