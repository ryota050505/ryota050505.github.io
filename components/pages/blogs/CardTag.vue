<template>
  <span
    :class="'card-tag'"
  >
    <v-icon
      small
      color="light-blue darken-3"
    >
      mdi-tag
    </v-icon>
    <slot/>
  </span>
</template>

<style lang="scss" scoped>
.card-tag {
  display: inline-block;
  padding: 0 2px;
  margin: 0 2px;
}
</style>