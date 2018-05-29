// require('dotenv').config()
const { resolve } = require('path')
import bodyParser from 'body-parser'
import session from 'express-session'

const theme = 'mat'
module.exports = {
  head: {
    title: 'meta-base',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'viewport',
        content:
          'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width',
      },
      { name: 'format-detection', content: 'telephone="no"' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  dev: false,
  env: {
    AWS_COGNITO_USER_POOL_DOMAIN: process.env.AWS_COGNITO_USER_POOL_DOMAIN,
    AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID,
  },
  css: [`~/assets/themes/app.${theme}.styl`],
  router: { middleware: ['authorization', 'userAgent'] },
  loading: { color: '#5D5DB1', height: '3px' },
  toast: {
    position: 'bottom-left',
    duration: 2000,
  },
  loadingIndicator: {
    name: 'circle',
    color: '#5D5DB1',
    background: 'white',
  },
  render: {
    resourceHints: true,
  },
  build: {
    extractCSS: true,
    // analyze: true,
    // babel: {
    //   plugins: ['transform-decorators-legacy', 'transform-class-properties'],
    // },
    // vendor: ['~/plugins/quasar.js'],
    extend(config, { isDev, isClient }) {
      config.resolve.alias[
        'quasar'
      ] = `quasar-framework/dist/quasar.${theme}.esm`
      // config.resolve.alias['class-component'] = '@/plugins/class-component'
      // config.resolve.variables= '@/assets/themes/quasar.variables.styl'
      process.isDev = isDev
      process.isClient = isClient
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        // config.plugins.push(
        //   require('stylelint-webpack-plugin')({
        //     files: '**/*.{vue,styl}',
        //     exclude: /(node_modules|quasar)/,
        //   }),
        // )
      }
    },
  },
  plugins: [
    { src: '~plugins/vee-validate.js', ssr: true },
    { src: '~plugins/vue-particles.js', ssr: false },
    { src: '~plugins/vuex-persistedstate.js', ssr: false },
  ],
  modules: [
    '~/modules/dev-tools',
    // '~/modules/cognito',
    '~/modules/quasar',
    // '~/modules/vue-particles',
    // '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    // '@@',
    // '~/modules/typescript',
    // '~/modules/imagemin',
    // '@nuxtjs/router',
    // '@nuxtjs/pwa',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/onesignal',
    // ['nuxt-stylus-resources-loader', path.resolve(__dirname, `assets/themes/app.mat.styl`)],
  ],
  // axios: {
  //   proxy: true,
  // },
  proxy: {
    '/api': 'http://localhost:3000',
    // ['/dog', { target: 'https://dog.io/', pathRewrite: { '^/dog': '/api/breeds/image/random' } }]
  },
  // stylusResources: [path.resolve(__dirname, 'assets/themes/app.mat.styl')],
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    }),
    '~/api',
  ],
  render: {
    http2: {
      push: true,
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      },
    },
  },
}
