<template>
  <no-ssr>
    <q-toolbar color="dark">
      <q-toolbar-title
        class="text-light" >
        <q-btn
          flat
          @click="$router.push('/')" >
          meta-x
        </q-btn>
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
    </q-toolbar>
  </no-ssr>
</template>
