/* eslint-disable */
import createPersistedState from 'vuex-persistedstate'
export default ({store}) => {
  createPersistedState({
      key: 'metakey',
      paths: ['auth']
  })(store)
}
