import Vue from 'vue'
import Quasar, * as All from 'quasar'
console.log('QUASAR', Quasar)
console.log('ALL', All)

Vue.use(Quasar, {
  components: All,
  directives: All
})
