const { resolve } = require('path')

module.exports = function nuxtBootstrapVue(moduleOptions) {
  this.addPlugin(resolve(__dirname, '../plugins/vue-particles.js'))
}
