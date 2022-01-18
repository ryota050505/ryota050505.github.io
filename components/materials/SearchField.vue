<template>
  <v-responsive :max-width="maxWidth">
    <v-text-field
      v-model="syncedQuery"
      dense
      flat
      hide-details
      rounded
      solo-inverted
      placeholder="Search..."
      :disabled="!isActive()"
      @keydown.enter="search($event.keyCode)"
    ></v-text-field>
  </v-responsive>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  PropSync,
} from 'nuxt-property-decorator'

import {
  Pathable,
} from '~/types/Pathable'

@Component
export default class SeachField extends Pathable {

  @PropSync('query', { type: String, required: true })
  private syncedQuery!: string

  @Prop({ type: Number, default: 260 })
  private maxWidth!: number

  private search(keyCode: number): void {
    if (keyCode !== 13) return
    this.$router.push({
      query: {
        q: this.syncedQuery
      }
    })
  }
}
</script>