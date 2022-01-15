<template>
  <v-footer
    app
    :absolute=true
  >
    <span>
      &copy; {{ new Date().getFullYear() }}
      りょーたの遊び場
    </span>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutsFooter'
})
</script>