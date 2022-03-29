<template>
  <span
    :class="`font-weight-bold
      ${item.color}--text
      ${$vuetify.breakpoint.xs ? 'text-caption': ''}
    `"
    v-text="item.year"
  ></span>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator'
@Component
export default class TimeStamp extends Vue {
  @Prop({ type: Object, required: true })
  private item!: object
}
</script>