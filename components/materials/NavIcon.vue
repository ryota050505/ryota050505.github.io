<template>
  <v-app-bar-nav-icon
    aria-label="NavIcon"
    @click="updateDrawer()"
  />
</template>

<script lang="ts">
import {
  Component,
  PropSync,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class NavIcon extends Vue {
  @PropSync('drawer', { type: Boolean, required: true })
  private syncedDrawer!: boolean

  private updateDrawer() {
    this.syncedDrawer = true
  }
}

</script>