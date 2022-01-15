<template>
  <v-app id="inspire">
    <LayoutsHeader />

    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <LayoutsFooter />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class DefaultLayout extends Vue {}
</script>
