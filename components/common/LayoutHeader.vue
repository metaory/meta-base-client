<template>
  <q-layout-header>
    <q-toolbar color="dark">
      <q-btn
        flat
        round
        dense
        icon="menu"
        color="light"
        aria-label="Toggle menu on left side"
        @click="$emit('toggle')" />
      <q-toolbar-title
        class="text-light"
      >
        <span
          slot="subtitle"
          class="text-blue-grey-13">
          {{ profile.name }}
        </span>
        <span
          class="text-blue-grey-14"
          @click="$router.push('/')">
          META-BASE
        </span>
      </q-toolbar-title>
      <q-btn
        v-for="(dummy, i) in ['change_history', 'opacity', 'bug_report', 'flash_on', 'filter_drama'].sort(() => Math.random() - 0.5)"
        :icon="dummy"
        :color="['primary', 'secondary', 'warning', 'negative', 'positive'][Math.floor(Math.random()*5)]"
        :key="dummy"
        flat
        dense
        round
        @click="$router.push(`/dummy/${i}`)"/>
      <q-btn
        color="negative"
        icon="exit_to_app"
        flat
        round
        @click="__signOut"/>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
/* eslint-disable */
// import { LocalStorage } from 'quasar'
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
