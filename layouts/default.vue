<template>
  <no-ssr>
    <q-layout>
      <layout-header @toggle="$refs.drawer.toggle()"/>
      <layout-drawer ref="drawer"/>
      <q-page-container>
        <nuxt/>
      </q-page-container>
    </q-layout>
  </no-ssr>
</template>

<script>
/* eslint-disable */
import LayoutHeader from '~/components/common/LayoutHeader'
import LayoutDrawer from '~/components/common/LayoutDrawer'
export default {
  name: 'DefaultLayout',
  components: { LayoutHeader,LayoutDrawer },
  data () {
    return {
      drawer: false
    }
  },
  mounted () {
  console.log('MOUNTED', this.$refs)
  }
}
</script>

<style>
</style>
