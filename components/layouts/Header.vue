<template>
  <v-app-bar
    app
    color="base"
    flat
    hide-on-scroll
  >
    <v-container class="py-0 fill-height">
      <MaterialsLogo
      />

      <MaterialsHeaderLink
        v-for="(link, i) in linkList"
        :key="i"
        :link="link"
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
  LINK_LIST
} from '~/constants/Header'
import {
  LinkList,
} from '~/types/LinkList'
@Component
export default class Header extends Vue {
  protected linkList: LinkList = LINK_LIST
}
</script>
