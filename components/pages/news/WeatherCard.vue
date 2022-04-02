<template>
  <v-card
    class="ma-4"
    light
    width="250"
    @click="toggle"
  >
    <v-list>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{ City }} {{ implementsCurrent(Weather)? '(現在)':'' }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ showTime }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h6"
          cols="6"
        >
          <span
            v-if="implementsDaily(Weather)"
          >
            {{ Math.ceil(Weather.temp.min) + '&deg;C' + '/' + Math.ceil(Weather.temp.max) + '&deg;C' }}
          </span>
          <span
            v-else-if="implementsCurrent(Weather) || implementsHourly(Weather)"
          >
            {{ Math.ceil(Weather.temp) + '&deg;C' }}
          </span>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="`http://openweathermap.org/img/wn/${Icon}@2x.png`"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ Weather.wind_speed }} m/s</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ Weather.clouds }}%</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ Weather.pressure }} hPa</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-water-percent</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ Weather.humidity }}%</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        v-if="(implementsDaily(Weather) || implementsHourly(Weather))"
      >
        <v-list-item-icon>
          <v-icon>mdi-weather-rainy</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ Pop }}%</v-list-item-subtitle>
      </v-list-item>

    </v-list>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

import {
  Base,
  Current,
  Daily,
  Hourly,
} from '~/types/Weather'

@Component
export default class OnecallWeatherClass extends Vue{
  @Prop({ type: Object })
  private weather!: Base

  @Prop({ type: Boolean })
  private active!: Boolean

  @Prop({ type: Function })
  private toggle!: Function

  @Prop({ type: String })
  private city!: String

  get Weather() {
    return this.weather
  }

  get currentDateTime() {
    return new Date(this.weather.dt * 1000)
  }

  get temp() {
    if (this.implementsCurrent(this.weather) || this.implementsHourly(this.weather)) {
      return Math.ceil(this.weather.temp) + '&deg;C'
    } else if(this.implementsDaily(this.weather)) {
      return Math.ceil(this.weather.temp.min) + '&deg;C' + '/' + Math.ceil(this.weather.temp.max) + '&deg;C'
    }
  }

  get description() {
    return this.weather.weather[0].description
  }

  get showTime(): string {
    const date = this.currentDateTime
    const dateString = date.toDateString()
    const timeString = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    return (this.implementsCurrent(this.weather) ? dateString + ' ' + timeString : dateString)
  }

  get City() {
    return this.city
  }

  get Icon() {
    return this.weather.weather[0].icon
  }

  get Pop() {
    if (this.implementsDaily(this.weather) || this.implementsHourly(this.weather)){
      return this.weather.pop * 100
    }
    return null
  }

  // タイプガード
  private implementsCurrent(arg: any): arg is Current {
    return arg !== null &&
      typeof arg === "object" &&
      typeof arg.pop === "undefined" &&
      typeof arg.temp === "number"
  }

  private implementsDaily(arg: any): arg is Daily {
    return arg !== null &&
      typeof arg === "object" &&
      typeof arg.pop === "number" &&
      typeof arg.temp === "object"
  }

  private implementsHourly(arg: any): arg is Hourly {
    return arg !== null &&
      typeof arg === "object" &&
      typeof arg.pop === "number" &&
      typeof arg.temp === "number"
  }
}
</script>