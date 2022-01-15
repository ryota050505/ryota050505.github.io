<template>
  <v-footer app :absolute="true">
    <span>
      &copy; {{ new Date().getFullYear() }}
      りょーたの遊び場
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class FooterComponent extends Vue {}
</script>
