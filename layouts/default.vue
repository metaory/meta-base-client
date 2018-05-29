<template>
  <div>
    <layout-header/>
    <nuxt/>
  </div>
</template>

<script>
import LayoutHeader from '~/components/common/LayoutHeader'
export default {
  name: 'DefaultLayout',
  components: { LayoutHeader },
  // middleware: 'authorization'
}
</script>

<style>
</style>
