<template>
  <no-ssr class="flex non-selectable window-height">
    <div>
      <vue-particles
        ref="particles"
        :particles-number="32"
        class="root"
        lines-color="#16c98d"
        color="#27dede"
      />
      <nuxt class="self-center text-center uppercase"/>
    </div>
  </no-ssr>
</template>

<script>
export default {
  name: 'ParticlesLayout',
}
</script>

<style lang="stylus">
#particles-js
  position: fixed
  height: 100vh
  width: 100vw
</style>
