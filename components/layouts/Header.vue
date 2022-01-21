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
        v-for="(link, i) in linkList"
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
  LINK_LIST
} from '~/plugins/constants'
import {
  LinkList,
} from '~/types/LinkList'
@Component
export default class Header extends Vue {
  protected query: string = ""

  protected linkList: LinkList = LINK_LIST
}
</script>
