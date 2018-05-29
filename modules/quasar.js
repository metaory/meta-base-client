const { resolve } = require('path')

module.exports = function nuxtBootstrapVue(moduleOptions) {
  // if (moduleOptions.css) this.options.css.unshift('~/assets/themes/app.${theme}.styl')
  this.addPlugin(resolve(__dirname, '../plugins/quasar.js'))
}
