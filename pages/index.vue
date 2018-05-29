<template>
  <div class="q-pa-md">
    <!-- <app-logo/> -->
    <h4 class="text-blue uppercase"> index </h4>
    <no-ssr>
      <dummy-form/>
    </no-ssr>
  </div>
</template>

<script>
import DummyForm from '~/components/DummyForm'

export default {
  name: 'Home',
  components: { DummyForm },
}

</script>

<style scoped lang="stylus">
</style>
