/* eslint-disable */

// isStatic isDev isHMR app store payload error base env req res redirect
// beforeNuxtRender next _redirected _errored route params query $axios
// export default function({ isHMR, isStatic, store, route, redirect, app }) {

// 'isStatic', 'isDev', 'isHMR', 'app', 'store', 'payload', 'error', 'base',
// 'env', 'redirect', 'nuxtState', 'next', '_redirected', '_errored', 'route',
// 'params', 'query', '$axios',
export default ({ store }) => {
  // console.log('CTX', Object.keys(ctx))
  store.dispatch('cms/init')
}
