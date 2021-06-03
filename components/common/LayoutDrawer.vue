<template>
  <q-layout-drawer
    v-model="showing"
    content-class="bg-blue-grey-10"
    side="left">
    <img
      slot="header"
      width="32"
      alt="metaory"
      src="~/assets/logo.png">
  </q-layout-drawer>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      showing: false
    }
  },
  methods: {
    toggle() {
      this.showing = !this.showing
    }
  }
}
</script>
