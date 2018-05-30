/* eslint-disable */

// "isStatic" "isDev" "isHMR" "app" "store" "payload" "error" "base" "env"
// "redirect" "nuxtState" "next" "_redirected" "_errored" "route" "params"
// "query" "$axios" "from" "userAgent"

export default function({ store, route, redirect, app }) {
  const { 'auth/isAuthenticated': isAuthenticated } = store.getters
  const r = Math.random()
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
}
