<template>
  <v-app id="inspire">
    <LayoutsHeaderSp
      v-if="$vuetify.breakpoint.mobile"
    />
    <LayoutsHeader
      v-else
    />

    <v-main class="grey lighten-3">
      <v-container>
        <v-fade-transition
          mode="out-in"
        >
        <Nuxt
        />
        </v-fade-transition>
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
