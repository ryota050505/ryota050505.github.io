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
  ENTER_KEY_CODE
} from '~/constants/Search'
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
    if (keyCode !== ENTER_KEY_CODE) return
    if (this.syncedQuery) {
      this.$router.push({
        query: {
          q: this.syncedQuery,
          category: this.$route.query.category
        }
      })
    } else {
      this.$router.push({
        query: {
          category: this.$route.query.category
        }
      })
    }
  }
}
</script>