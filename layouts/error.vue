<template>
  <div
    class="col-12"
  >
    <h4 class="text-negative text-bold q-ma-none"> [ {{ message }} ] </h4>
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
      now
    </q-btn>

    <a
      target="_blank"
      class="fixed-bottom-left q-pa-md"
      rel="noopener">
      <img
        width="32"
        alt="metaory"
        src="~/assets/logo.png">
    </a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'nuxt-error',
  props: ['error'],
  layout: 'particles',
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  data () {
    return {
      interval: null,
      timer: 9
    }
  },
  mounted () {
    this.mounted = true
    this.startTimer()
  },
  created () {
    console.error(this.error)
  },
  watch: {
    error(newErr) {
      if(newErr) {
        console.error(newErr)
      }
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error!'
    },
    action () {
      const {query: _q} = this.$route
      return _q && _q.a ? _q.a : '/'
    }
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.timer -= 1
        if (this.timer === 0) {
          this.initiate()
        }
      }, 1000)
    },
    initiate() {
      clearInterval(this.interval)
      this.$router.push(this.action)
    }
  }
}
</script>

<style>
</style>
