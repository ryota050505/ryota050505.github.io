<template>
  <v-app-bar app color="black" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" :to="link.to" text>
        <v-icon large>
          {{ link.icon }}
        </v-icon>
        {{ link.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { LinkList } from '~/types/LinkList'
@Component
export default class HeaderComponent extends Vue {
  links: LinkList = [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home',
    },
    {
      title: 'Profile',
      to: '/profile',
      icon: 'mdi-face-man-profile',
    },
    {
      title: 'Skill',
      to: '/skill',
      icon: 'mdi-laptop',
    },
    {
      title: 'Blog',
      to: 'blog',
      icon: 'mdi-post',
    },
    {
      title: 'News',
      to: '/news',
      icon: 'mdi-message-text',
    },
    {
      title: 'Contact',
      to: '/contact',
      icon: 'mdi-email',
    },
  ]
}
</script>
