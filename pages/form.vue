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
/*eslint-disable*/
import DummyForm from '~/components/DummyForm'

export default {
  name: 'DummyForm',
  components: { DummyForm },
}

</script>

<style scoped lang="stylus">
</style>
