<template>
  <v-app-bar
    app
    color="black"
    flat
    clipped-left
  >
    <v-container class="py-0 fill-height">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      />
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-navigation-drawer
        v-model="drawer"
        app
        fixed
        hide-overlay
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-hover
              v-for="(link, i) in links"
              v-slot="{ hover }"
              :key="i"
            >
            <v-list-item
              :to="link.to"
              nuxt
              :ripple="{ center: true }"
            >
            <v-list-item-content>
              <v-btn
                text
              >
              <v-icon
                :color="hover || equalPathTo(link.to) ? link.color : ''"
                flex
              >
                {{ link.icon }}
              </v-icon>
              <v-list-item-title v-text="link.title"/>
              </v-btn>
            </v-list-item-content>
            </v-list-item>
            </v-hover>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-spacer></v-spacer>

      <v-responsive max-width="150">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          :disabled="!(equalPathTo('/blog') || equalPathTo('/news'))"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'

import HeaderComponent from './Header.vue'

@Component
export default class HeaderSpComponent extends HeaderComponent {
  drawer = false
}
</script>
