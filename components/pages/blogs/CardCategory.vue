<template>
  <span
    :class="'card-category'"
  >
    <v-icon
      small
      color="brown lighten-1"
    >
      mdi-folder
    </v-icon>
    <slot/>
  </span>
</template>

<style lang="scss" scoped>
.card-category {
  display: inline-block;
  padding: 0 2px;
  margin: 0 2px;
}
</style>