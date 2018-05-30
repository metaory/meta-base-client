<template>
  <q-layout-drawer
    v-model="showing"
    content-class="bg-blue-grey-10"
    side="left">
    <product-list>
      <img
        slot="header"
        width="32"
        alt="metaory"
        src="~/assets/logo.png">
    </product-list>
  </q-layout-drawer>
</template>

<script>
import ProductList from '~/components/ProductList'
export default {
  name: 'LayoutHeader',
  components: { ProductList },
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
