<template>
  <v-app-bar
    app
    color="base"
    flat
    clipped-left
  >
    <v-container class="py-0 fill-height">
      <MaterialsNavIcon
        :drawer.sync="drawer"
      />

      <MaterialsLogo
      />

      <MaterialsNavList
        :drawer.sync="drawer"
      >
        <template
          v-for="(link, i) in linkList"
        >
          <MaterialsHeaderLinkSp
            :key="i"
            :link="link"
          />
        </template>
      </MaterialsNavList>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import {
  Component
} from 'nuxt-property-decorator'

import Header from './Header.vue'

@Component
export default class HeaderSp extends Header {
  private drawer = false
}
</script>
