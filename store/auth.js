/* eslint-disable */
console.log('AUTH STORE')

const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
const SET_VERIFICATION = 'SET_VERIFICATION'
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
const SET_ID_TOKEN = 'SET_ID_TOKEN'
const SET_PROFILE = 'SET_PROFILE'

const RESET = 'RESET'
// import * as types from './mutation-types'
import { Notify, Loading, LocalStorage } from 'quasar'
import jwt from 'jwt-decode'
import Axios from 'axios'
// import  from 'vue-cookie'
// import router from '../../router'
// const router = {}
// import { genSecret } from '../../utils/helpers'
export const genSecret = (length = 32) =>
  Array.from({ length })
    .map(() => Math.random().toString(36)[2])
    .join('')
import cognito from '~/modules/cognito'
export const state = ctx => ({
  profile: null,
  appToken: null,
  accessToken: null,
  verification: null,
  isAuthenticated: false,
})

export const getters = {
  account: state => {
    return {}
  },
  isAuthenticated: state => state.isAuthenticated,
  profile: state => state.profile,
}
export const actions = {
  async signIn({ commit }) {
    const verification = genSecret()
    commit(SET_VERIFICATION, verification)
    cognito({ verification })
  },
  authenticate({ state, commit }, payload) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log('AUTHENTICATE')
    console.log('STATE', state)
    console.log('PAYLOAD', payload)
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    // try {
      if (payload.state === null || payload.state !== state.verification) {
        console.log(' FAIL 1 ')
        throw 'unauthorized'
        // router.push({
        //   name: 'unauthorized',
        //   params: {
        //     message:
        //       'The verification state in the authentication response did not match our original request',
        //   },
        // })
        // return
      }
      if (
        payload.id_token === null ||
        (jwt(payload.id_token).token_use || null) !== 'id'
      ) {
        console.log(' FAIL 2 ')
        throw 'unauthorized'
        // router.push({
        //   name: 'unauthorized',
        //   params: {
        //     message:
        //       'The authentication response did not include a valid ID token',
        //   },
        // })
        // return
      }
      commit(SET_PROFILE, jwt(payload.id_token))
      commit(SET_ACCESS_TOKEN, payload.access_token)
      commit(SET_ID_TOKEN, payload.id_token)
      commit(SET_AUTHENTICATED, true)
    // } catch (err) {
    //   console.log('CATCH', err)
    // }
  },
  signOut({ dispatch }) {
    dispatch('reset')
    // router.push({ name: 'unauthorized' })
  },
  reset({ commit }, msg = 'error') {
    commit(SET_AUTHENTICATED, false)
  },
}
export const mutations = {
  [SET_VERIFICATION](state, verification) {
    state.verification = verification
    // VueCookie.set('verification', verification)
  },
  [SET_PROFILE](state, profile) {
    state.profile = profile
    // VueCookie.set('profile', profile)
  },
  [SET_ACCESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken
    // VueCookie.set('accessToken', accessToken)
  },
  [SET_ID_TOKEN](state, idToken) {
    state.idToken = idToken
    // VueCookie.set('idToken', idToken)
  },
  [SET_AUTHENTICATED](state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  [RESET](state) {
    LocalStorage.clear()
    state.isAuthenticated = false
  },
}
// export default {
//   // namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions,
// }
//  restore({ commit }, user) {
//   commit(SET_USER, user)
// },
