<template>
  <v-sheet
    max-width="800"
    class="mx-auto"
  >
    <v-radio-group
      v-model="selectedWeatherType"
      row
    >
      <v-radio
        label="Daily"
        :value="FetchType.DAILY"
      >
      </v-radio>
      <v-radio
        label="Hourly"
        :value="FetchType.HOURLY"
      >
      </v-radio>
    </v-radio-group>
    <v-slide-group
      center-active
      class=""
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
        v-for="(item, i) in Weather"
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
  Current,
  Daily,
  FetchType,
  Hourly,
  OnecallWeather,
} from '~/types/Weather'
@Component
export default class OnecallWeatherClass extends Vue{
  @Prop({ type: Object })
  private item!: OnecallWeather

  @Prop({ type: String })
  private city!: string

  private selectedWeatherType = FetchType.DAILY

  private FetchType = FetchType

  get WeatherType(): FetchType {
    return this.selectedWeatherType
  }

  get Weather(): Daily[] | Hourly[] {
    switch(this.WeatherType) {
      case FetchType.DAILY:
        return this.daily
      case FetchType.HOURLY:
        return this.hourly
      default:
        throw new Error('No such WeatherType => ' + this.WeatherType)
    }
  }


  get Item(): OnecallWeather {
    return this.item
  }

  get current(): Current {
    return this.item.current
  }

  get daily(): Daily[] {
    return this.item.daily
  }

  get hourly(): Hourly[] {
    return this.item.hourly
  }
}
</script>