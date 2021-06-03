<template>
  <div class="col-12" >
    <h4 class="text-info text-bold q-ma-none" >
      [ authenticating ... ]
    </h4>
  </div>
</template>

<script>
/* eslint-disable */
import * as queryString from 'query-string'
import { createNamespacedHelpers } from 'vuex'
const mapAuthActions = createNamespacedHelpers('auth').mapActions
export default {
  name: 'Authenticate',
  layout: 'particles',
  mounted () {
    this.__authenticate()
  },
  methods: {
    ...mapAuthActions(['authenticate']),
    async __authenticate () {
      try {
        this.authenticate(queryString.parse(this.$route.hash))
        this.$router.push('/')
      } catch (e) {
        console.log('CATCH', e)
        this.$router.push('unauthorized')
        console.log('THIS', this)
      } finally {
        console.log('FINALLY')
      }
    }
  }
}
</script>

<style>
</style>
