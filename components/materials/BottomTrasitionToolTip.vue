<template>
  <v-tooltip
    top
  >
    <template
      #activator="{ on: tooltip }"
    >
      <v-btn
        nuxt
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
export default class BottomTransitionToolTip extends Vue {
  @Prop({ type: Object , required: true })
  private to!:string | object

  @Prop({ type: Boolean, default: false })
  private isIcon!:boolean
}
</script>