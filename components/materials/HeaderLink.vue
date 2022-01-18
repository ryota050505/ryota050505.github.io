<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :to="link.to"
      text
      nuxt
      :ripple="{ center: true, class: link.color.split(' ')[0] + '--text' }"
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
</template>

<script lang="ts">
import {
  Component,
  Prop,
} from 'nuxt-property-decorator'

import {
  Link,
} from '~/types/LinkList'
import {
  Pathable,
} from '~/types/Pathable'

@Component
export default class HeaderLink extends Pathable {
  @Prop({ type: Object, required: true })
  private link!: Link
}
</script>