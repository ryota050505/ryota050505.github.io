<template>
  <v-app id="inspire">

    <LayoutsHeader/>

    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

    <LayoutsFooter/>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'DefaultPage',
})
</script>