<template>
  <v-avatar class="mr-10" color="grey darken-1" size="32">
    <v-img
      :src="require('@/assets/img/takoyaki.png')"
    />
  </v-avatar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class Logo extends Vue {}
</script>