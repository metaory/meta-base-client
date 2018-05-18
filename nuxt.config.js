const theme = "mat"; // | ios
module.exports = {
  head: {
    title: "nuxt-q",
    meta: [
      {charset: "utf-8"},
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: "viewport",
        content:
          "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width"
      },
      {name: "format-detection", content: 'telephone="no"'},
      {name: "msapplication-tap-highlight", content: "no"},
      {hid: "description", name: "description", content: "Nuxt.js project"}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  plugins: ["~/plugins/quasar.js"],
  css: [`~/assets/themes/app.${theme}.styl`],
  router: {
    middleware: "userAgent"
  },
  loading: {color: "#3B8070"},
  build: {
    vendor: ["~/plugins/quasar.js"],
    extend(config, ctx) {
      config.resolve.alias.quasar = `quasar-framework/dist/quasar.${theme}.esm`;
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules|quasar)/
        });
      }
    }
  }
};
