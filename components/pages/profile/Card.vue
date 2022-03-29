<template>
  <v-card
    :color="item.color"
    dark
    @click="onClicked(item)"
  >
    <v-card-title
      :class="`
        headline
        font-weight-light
        ${$vuetify.breakpoint.xs ? 'text-subtitle-1': ''}
      `"
    >
      {{ item.title }}
      <v-spacer/>
      <v-icon
        v-if="item.body"
      >
        mdi-text-long
      </v-icon>
    </v-card-title>
    <v-fade-transition leave-absolute>
      <v-card-text
        v-show="item.body && item.pushed"
        :class="`
          white
          black--text
          text-left
          ${$vuetify.breakpoint.xs ? 'text-body-1': ''}
        `"
        v-text="item.body"
      />
    </v-fade-transition>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator"

@Component
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  private item!: object

  onClicked(item: any) {
    item.pushed = !item.pushed
  }
}
</script>