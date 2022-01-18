<template>
  <v-btn
    icon
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
  Pathable,
} from '~/types/Pathable'

@Component
export default class SearchButton extends Pathable {
  @Prop({ type: String, required: true })
  private query!: string

  private search() {
    this.$router.push({
      query: {
        q: this.query,
        category: this.$route.query.category
      }
    })
  }
}
</script>
