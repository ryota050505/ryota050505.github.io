<template>
  <v-card
    class="my-3"
  >
    <v-tabs
      v-model="tab"
      background-color="slategrey"
      dark
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
        dark
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text><slot :name="item"/></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'
@Component
export default class Tabs extends Vue {

  private tab: boolean = true

  @Prop({ type: Array })
  private items!: string[]
}
</script>