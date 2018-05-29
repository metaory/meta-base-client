/*eslint-disable*/
// import * as quasar from "quasar";

// export default function(context) {
//   console.log("CONTEXT", context);
//   // context.userAgent =
//   // context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
//   // Platform.is = getPlatform(context.userAgent)
// }
export default function(context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  console.log('CONTEXT.USERAGENT', context.route.path, context.isDev)
}
