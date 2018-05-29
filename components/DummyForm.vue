<template>
  <div class="dummy-form text-center">
    <div
      class="row text-bold text-center"
      style="min-height: 28px;">
      <div
        data-cy="dummy-title"
        class="text-positive full-width" >{{ title }}</div>
    </div>
    <q-input
      v-model="foo"
      clearable
      dark
      data-cy="dummy-foo-input"
      placeholder="foo" />
    <q-input
      v-model="bar"
      data-cy="dummy-bar-input"
      clearable
      dark
      placeholder="bar" />
    <q-btn-group
      push
      class="q-pt-md">
      <q-btn
        :disable="!foo && !bar"
        data-cy="dummy-reset-btn"
        push
        color="secondary"
        @click="foo='',bar=''">reset</q-btn>
      <q-btn
        data-cy="dummy-fill-btn"
        push
        color="primary"
        @click="foo = bar ='DUMMY'">fill</q-btn>
    </q-btn-group>
  </div>
</template>

<script>
export default {
  name: 'DummyForm',
  data() {
 return { foo: '', bar: '', }
  },
  computed: {
    title () {
      return (this.foo + ' ' + this.bar).trim()
    }
  }
}
</script>
