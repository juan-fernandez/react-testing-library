const {jest: jestConfig} = require('kcd-scripts/config')

module.exports = Object.assign(jestConfig, {
  testRunner: '@undefinedlabs/scope-agent/jestTestRunner',
  runner: '@undefinedlabs/scope-agent/jestRunner',
})
