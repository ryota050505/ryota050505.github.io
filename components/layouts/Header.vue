<template>
  <v-app-bar app color="black" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-hover v-for="(link, i) in links" :key="i" v-slot="{ hover }">
          <v-btn
            :to="link.to"
            text
            nuxt
            :ripple="{ center: true }"
          >
            <v-icon
              large
              :color="hover || equalPathTo(link.to) ? link.color : ''"
            >
              {{ link.icon }}
            </v-icon>
            {{ link.title }}
          </v-btn>
        </v-hover>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
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
import { Component, Vue } from 'nuxt-property-decorator'

import { LinkList } from '~/types/LinkList'
@Component
export default class HeaderComponent extends Vue {
  links: LinkList = [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home',
      color: 'green accent-3',
    },
    {
      title: 'Profile',
      to: '/profile',
      icon: 'mdi-face-man-profile',
      color: 'brown lighten-1',
    },
    {
      title: 'Skill',
      to: '/skill',
      icon: 'mdi-laptop',
      color: 'purple accent-3',
    },
    {
      title: 'Blog',
      to: '/blog',
      icon: 'mdi-post',
      color: 'orange accent-3',
    },
    {
      title: 'News',
      to: '/news',
      icon: 'mdi-message-text',
      color: 'cyan accent-3',
    },
    {
      title: 'Contact',
      to: '/contact',
      icon: 'mdi-email',
      color: 'lime accent-3'
    },
  ]

  public get path() : string {
    return this.$route.path
  }

  public equalPathTo(path: string) : boolean {
    return this.path === path
  }
}
</script>
