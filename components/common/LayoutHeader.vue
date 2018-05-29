<template>
  <no-ssr>
    <q-toolbar color="dark">
      <img
        width="16"
        alt="metaory"
        src="~/assets/logo.png">
      <q-toolbar-title
        class="text-light"
      >
        <span
          slot="subtitle">
          {{ profile.name }}
        </span>
        <span
          @click="$router.push('/')">
          meta-x
        </span>
      </q-toolbar-title>
      <q-btn
        v-for="(dummy, i) in ['change_history',
                              'opacity',
                              'bug_report',
                              'flash_on',
                              'filter_drama']
        .sort(() => Math.random() - 0.5)"
        :icon="dummy"
        :color="['primary', 'secondary', 'warning', 'negative', 'positive']
        [Math.floor(Math.random()*5)]"
        :key="dummy"
        flat
        round
        @click="$router.push(`/dummy/${i}`)"/>
      <q-btn
        color="negative"
        icon="exit_to_app"
        flat
        round
        @click="__signOut"/>
    </q-toolbar>
  </no-ssr>
</template>

<script>
/* eslint-disable */
import { LocalStorage } from 'quasar'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'LayoutHeader',
  data() {
    return { }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      profile: 'auth/profile',
    })
  },
  mounted() {
    console.log('MOUNTED', this.profile)
  },
  methods: {
    ...mapActions({signOut: 'auth/signOut'}),
    __signOut() {
      // LocalStorage.clear()
      this.signOut()
      this.$router.push('/unauthorized')
    }
  }
}
</script>
