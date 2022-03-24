<template>
  <v-tooltip
    :top="!isBottom"
    :bottom="isBottom"
  >
    <template
      #activator="{ on: tooltip }"
    >
      <v-btn
        nuxt
        :aria-label="ariaLabel"
        :to="to"
        :icon="isIcon"
        v-on="{ ...tooltip }"
      >
      <slot
        name="top"
      />
      </v-btn>
    </template>
    <slot
      name="tooltip"
    />
  </v-tooltip>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class TransitionToolTip extends Vue {
  @Prop({ type: Object, required: true })
  private to!:string | object

  @Prop({ type: Boolean, default: false })
  private isIcon!:boolean

  @Prop({ type: Boolean, default: false })
  private isBottom!: boolean

  @Prop({ type: String, required: true})
  private ariaLabel!: string
}
</script>