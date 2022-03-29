<template>
  <v-footer
    app
    absolute
    padless
  >
    <v-card
      flat
      tile
      class="text-center"
      width="100%"
      color="base"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, i) in contactList"
          :key="i"
          :aria-label="icon.title"
          class="mx-4"
          icon
          @click="jumpLinkTo(icon.to)"
        >
          <v-hover v-slot="{ hover }">
            <v-icon
              x-large
              :color="hover ? icon.color : ''"
            >
              {{ icon.icon }}
            </v-icon>
          </v-hover>
        </v-btn>
      </v-card-text>

      <v-divider/>

      <v-card-text
        class="white--text"
      >
        &copy; 2022<span v-if="new Date().getFullYear() != '2022'"> - {{ new Date().getFullYear() }}</span> - りょーた
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

import {
  FOOTER_CONTACT_LIST,
} from '~/constants/Footer'
@Component
export default class FooterComponent extends Vue {

  contactList = FOOTER_CONTACT_LIST

  jumpLinkTo(url: string): void {
    window.open(url, '_blank')
  }
}
</script>
