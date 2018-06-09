const findUp = require('find-up')

module.exports = function getConfig () {
  const path = findUp.sync('webextension-toolbox-config.js')

  let config = {}

  if (path && path.length) {
    const configModule = require(path)
    config = configModule.default || configModule
  }

  return config
}
