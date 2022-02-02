<template>
  <v-fade-transition>
    <v-overlay
      v-if="hover"
      :z-index="0"
      absolute
      color="black"
    >
      <div
        class="text-center"
        style="font-weight: bold;"
      >
        <slot/>
      </div>
    </v-overlay>
  </v-fade-transition>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  @Prop({ type: Boolean, required: true })
  private hover!: boolean
}
</script>