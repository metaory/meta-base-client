const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Jarvis = require('webpack-jarvis')
const chalk = require('chalk')
const { log } = console

module.exports = async function(moduleOptions) {
  this.extendBuild(config => {
    // console.log('CONFIG', config)
  if (!process.isDev) config.plugins.push(new BundleAnalyzerPlugin())
  // if (process.isDev && process.isClient) config.entry.vendor.push('tota11y/build/tota11y.min')
  })
  this.nuxt.hook('build:done', builder => {
    if (process.isDev && process.isClient)
      config.plugins.push(new Jarvis({ host: '0.0.0.0', port: 1337 }))
    log(
      chalk.black.bgGreen(' READY ') + ' Listening on',
      chalk.underline.blue('http://0.0.0.0:1337'),
    )
  })
}
