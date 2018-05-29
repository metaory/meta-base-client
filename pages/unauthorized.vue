<template>
  <div
    class="col-12"
  >
    <h4
      class="text-negative text-bold q-ma-none"
    >
      [ unauthorized access ]
    </h4>
    <h4
      class="text-blue-grey q-ma-none">redirecting in
      <strong
        :class="{ 'text-negative': timer < 4, }"
        class="text-positive"
      > {{ timer }} </strong>
    </h4>
    <q-btn
      color="blue-grey-14"
      flat
      @click="initiate">
      redirect now
    </q-btn>
  </div>
</template>

<script>
/* eslint-disable */
import {
  mapActions,
  mapGetters
} from 'vuex'
// const mapAuthActions = createNamespacedHelpers('auth').mapActions
export default {
  name: 'Unauthorized',
  layout: 'particles',
  data() {
    return {
      interval: null,
      timer: 9
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$router.push('/')
    }
    this.startTimer()
  },
  methods: {
    ...mapActions({signIn: 'auth/signIn'}),
    startTimer() {
      this.interval = setInterval(() => {
        this.timer -= 1
        if (this.timer === 0) {
          // this.initiate()
        }
      }, 1000)
    },
    initiate() {
      clearInterval(this.interval)
      this.signIn()
    }
  }
}
</script>

<style lang="stylus">
</style>
