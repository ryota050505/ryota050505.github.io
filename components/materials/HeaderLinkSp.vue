<template>
  <v-hover
    v-slot="{ hover }"
  >
    <v-list-item
      :to="link.to"
      nuxt
      :ripple="{ center: true, class: link.color.split(' ')[0] + '--text' }"
    >
    <v-list-item-content>
      <v-btn
        text
        plain
        retain-focus-on-click
        :ripple="false"
      >
      <v-icon
        :color="hover || equalPathTo(link.to) ? link.color : ''"
      >
        {{ link.icon }}
      </v-icon>
      <v-list-item-title v-text="link.title"/>
      </v-btn>
    </v-list-item-content>
    </v-list-item>
  </v-hover>
</template>

<script lang="ts">
import {
  Component,
} from 'nuxt-property-decorator'

import HeaderLink from './HeaderLink.vue'

@Component
export default class HeaderLinkSp extends HeaderLink {}
</script>