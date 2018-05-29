/* eslint-disable */
// "isStatic" "isDev" "isHMR" "app" "store" "payload" "error" "base" "env"
// "redirect" "nuxtState" "next" "_redirected" "_errored" "route" "params"
// "query" "$axios" "from" "userAgent"
// export default function({ app, query, base, params, redirect, route, store, error }) {
// import VueCookie from 'vue-cookie'
export default function({ store, route, redirect, app }) {
  // console.log('CTX', Object.keys(ctx))
  console.log('CTX.APP', Object.keys(app))
  console.log('CTX.APP', Object.keys(app.nuxt))
  console.log('CTX.APP', Object.keys(app.context))
  console.log('PROCESS.ISSERVER', process.server)
  // console.log('THIS', this)
  // console.log('STORE', store)
  const { 'auth/isAuthenticated': isAuthenticated } = store.getters
  const r = Math.random()
  console.log(isAuthenticated, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  // console.log('VUECOOKIE.GET(\'VERIFICATION\')', VueCookie.get('verification'))
  // console.log('BASE', base)
  // console.log(r, 'ROUTE', route, isAuthenticated)
  // console.log('APP.CONTEXT.ROUTE', app.context.route)
  // console.log('APP.CONTEXT.REQ._PARSEDORIGINALURL', app.context.req._parsedOriginalUrl)
  // console.log('APP.CONTEXT.REQ._PARSEDURL', app.context.req._parsedUrl)
  // console.log('APP.CONTEXT.REQ.URL', app.context.req.url)
  // console.log('APP.CONTEXT.REQ.ORIGINALURL', app.context.req.originalUrl)
  // console.log('QUERY', query)
  // console.log('PARAMS', params)
  // console.log(r, 'ROUTE.HASH', route.hash)
  // console.log(r, 'ROUTE.PATH', route.path)
  // console.log('APP', Object.keys(app.context))
  // console.log('APP', Object.keys(app.context.req))
  // if (route.path === '/authenticate') {
  //   console.log(r, 'callback CONDITION PASSED')
  //   redirect('/authenticate')
  // if (!store.state.authUser) {
  //   error({
  //     message: 'You are not connected',
  //     statusCode: 403
  //   })
  // }
  // if (route.path.includes('authenticate')) {
  // // if (route.path === '/authenticate') {
  //   return store.dispatch('authenticate', route)
  // }
  // if (isAuthenticated)
  // if (route.path === '/authenticate') {
  //   if (isAuthenticated) return redirect('/')
  //   // else next()
  // }
  // if (isAuthenticated) {
  //   if (['/authenticate', '/unauthorize'].includes(route.path)) redirect('/')
  // } else redirect('/unauthorize')
  if (
    !isAuthenticated &&
    !['/authenticate', '/unauthorized'].includes(route.path) &&
    !process.server
  ) {
    redirect('/unauthorized')
  }

  console.log(
    '???',
    ['/authenticate', '/unauthorized'].includes(route.path),
    isAuthenticated,
  )
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
}
