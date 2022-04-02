<template>
  <v-sheet
    max-width="800"
    class="mx-auto"
  >
    <v-slide-group
      v-model="model"
      show-arrows
      center-active
      class="pa-4"
    >
      <v-slide-item
        v-slot="{active, toggle}"
      >
        <PagesNewsWeatherCard
          :city="city"
          :weather="current"
          :active="active"
          :toggle="toggle"
        />
      </v-slide-item>
      <v-slide-item
        v-for="(item, i) in daily"
        :key="i"
        v-slot="{active, toggle}"
      >
        <PagesNewsWeatherCard
          :city="city"
          :weather="item"
          :active="active"
          :toggle="toggle"
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

import {
  OnecallWeather,
} from '~/types/Weather'
@Component
export default class OnecallWeatherClass extends Vue{
  @Prop({ type: Object })
  private item!: OnecallWeather

  @Prop({ type: String })
  private city!: string

  get Item() {
    return this.item
  }

  get current() {
    return this.item.current
  }

  get daily() {
    return this.item.daily
  }

  private model = 0
}
</script>