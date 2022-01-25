<template>
  <v-btn
    icon
    aria-label="検索する"
    :disabled="!isActive()"
    @click="search()"
  >
    <v-icon
    >
      mdi-magnify
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import {
  Component,
  Prop,
} from 'nuxt-property-decorator'

import {
  Query,
} from '~/types/Content'
import {
  Pathable,
} from '~/types/Pathable'
@Component
export default class SearchButton extends Pathable {
  @Prop({ type: String, required: true })
  private query!: string

  private search():void {
    const {
      category,
      tag,
    }: Query = this.$route.query

    const query: Query = {
      q: this.query,
      category,
      tag,
    }

    if(!this.query) delete query.q
    if(!category) delete query.category
    if(!tag) delete query.tag

    this.$router.push({
      query,
    })
  }
}
</script>
