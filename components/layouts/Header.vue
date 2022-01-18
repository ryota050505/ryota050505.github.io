<template>
  <v-app-bar
    app
    color="black"
    flat
  >
    <v-container class="py-0 fill-height">

      <MaterialsLogo
      />

      <template
        v-for="(link, i) in links"
      >
        <MaterialsHeaderLink
          :key="i"
          :link="link"
        />
      </template>

      <v-spacer/>

      <MaterialsSearchField
        :query.sync="query"
      />
      <MaterialsSearchButton
        :query="query"
      />
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

import {
  LinkList,
} from '~/types/LinkList'
@Component
export default class Header extends Vue {
  protected query: string = ""

  protected links: LinkList = [
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
      to: '/blogs',
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
}
</script>
