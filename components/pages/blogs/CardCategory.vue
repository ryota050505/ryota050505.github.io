<template>
  <span
    class="card-category"
  >
    <slot/>
  </span>
</template>

<style lang="scss" scoped>
.card-category {
  display: inline-block;
  font-size: .8em;
  text-transform: none;
  background-color: rgb(255, 199, 94);
  border-radius: 5px;
  padding: 0 2px;
  margin: 0;
}
</style>