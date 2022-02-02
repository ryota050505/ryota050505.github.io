<template>
  <v-card-title
    height="100%"
    :class="$vuetify.breakpoint.mobile? 'text-body-2' : 'text-body-1'"
  >
    <slot/>
  </v-card-title>
</template>

<style lang="scss">


</style>