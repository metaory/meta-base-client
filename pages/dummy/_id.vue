<template>
  <div class="flex justify-around">
    <h3 class="text-faded uppercase"> dummy page
      <strong class="text-positive">{{ $route.params.id }}
      </strong>
    </h3>
    <q-btn-group class="self-center">
      <q-btn
        push
        color="warning"
        @click="$router.go('-1')" > go back </q-btn>
      <q-btn
        push
        color="primary"
        @click="$router.push('/')" > go home </q-btn>
    </q-btn-group>
  </div>
</template>
