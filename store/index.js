/*eslint-disable*/
import createLogger from 'vuex/dist/logger'

export const strict = true
export const plugins = [
  createLogger(),
]

export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('#############################################################')
  },
}
// import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import createPersistedState from 'vuex-persistedstate'
// import auth from './auth'
// import Vue from 'vue'
// import config from './config'
// import auth from './auth'
// import user from './user'
// import XhrInterceptor from './plugins/xhr-interceptor'
// Vue.use(Vuex)
// const plugins = [
// createPersistedState({})
// ]
// const store = new Vuex.Store({
//   modules: { config, auth, user, },
//   strict: true,
//   plugins: debug ? [createLogger(), ...plugins] : plugins
// })
// const createStore = ctx => {
//   // const debug = true
//   const debug = process.isDev
//   return new Vuex.Store({
//     strict: true,
//     // actions: { nuxtServerInit({},{ req }) { console.log('!!!! NUXTSERVERINIT', req.session) }, },
//     modules: {
//       auth,
//     },
//     // plugins: debug ? [createLogger(), ...plugins] : plugins,
//     plugins: [createLogger()],
//   })
// }
//
// export default createStore
