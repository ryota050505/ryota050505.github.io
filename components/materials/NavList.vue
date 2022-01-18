<template>
  <v-navigation-drawer
    v-model="syncedDrawer"
    app
    fixed
    hide-overlay
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group>
        <slot
        />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {
  Component,
  PropSync,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class NavList extends Vue {
  @PropSync('drawer', { type: Boolean, required: true })
  private syncedDrawer!: boolean
}

</script>