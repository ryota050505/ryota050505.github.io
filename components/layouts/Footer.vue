<template>
  <v-footer
    app
    absolute
    dark
    padless
  >
    <v-card
      flat
      tile
      class="text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, i) in contactList"
          :key="i"
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

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} - りょーた
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
} from '~/plugins/constants'
@Component
export default class FooterComponent extends Vue {

  contactList = FOOTER_CONTACT_LIST

  jumpLinkTo(url: string): void {
    window.open(url, '_blank')
  }
}
</script>
