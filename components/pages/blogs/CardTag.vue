<template>
  <span
    :class="
      'card-tag ' +
      ($vuetify.breakpoint.mobile? 'text-caption' : '')
    "
  >
    <v-icon
      x-small
    >
      mdi-tag
    </v-icon>
    <slot/>
  </span>
</template>

<style lang="scss" scoped>
.card-tag {
  display: inline-block;
  font-size: .8em;
  text-transform: none;
  background-color: white;
  border-radius: 5px;
  border: solid .1px rgba(0, 0, 0, 0.4);
  padding: 0 2px;
  margin: 0 2px;
}
</style>