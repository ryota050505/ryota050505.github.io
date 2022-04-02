<template>
  <v-card
    class="mx-auto"
    max-width="400"
    light
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ items.city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="6"
        >
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    />

    <v-list class="transparent">
      <v-list-item
        v-for="(item, i) in items.list"
        :key="i"
      >
        <v-list-item-title>{{ item.dt_txt }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>{{ item.weather.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.main.temp_min + '&deg;C' + '/' + item.main.temp_max + '&deg;C'}}
        </v-list-item-subtitle>
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
  ForestWeather,
} from '~/types/Weather'
@Component
export default class PredictWeather extends Vue{
  @Prop({ type: Object })
  private items!: ForestWeather

  private model: number = 0

  private gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  get showItem() {
    const result = this.items.list.map((cloud: any) => cloud.main.temp)
    return this.sliceByNumber(result, 5)
  }

  get showLabel() {
    const result = this.items.list.map((cloud: any) => cloud.dt_txt)
    return this.sliceByNumber(result, 5)
  }

  private sliceByNumber(array: Array<object>, number: number) {
    const length = Math.ceil(array.length / number)
    const res = new Array(length).fill(0).map((_, i) => array.slice(i * number, (i + 1) * number))
    return res
  }

  private headers = [
    { text: '現在の気温', value: 'main.temp' },
    { text: '最高気温', value: 'main.temp_max'},
    { text: '最低気温', value: 'main.temp_min'},
    { text: '湿度', value: 'main.humidity'},
    { text: '気圧', value: 'main.pressure' },
    { text: '風速', value: 'wind.speed'},
    { text: '日時', value: 'dt_txt' },
  ]

  getColor(temp: number) {
    if (temp < 10) return 'blue'
    else if (temp < 20) return 'green'
    else if (temp < 25) return 'orange'
    else return 'red'
  }
}
</script>