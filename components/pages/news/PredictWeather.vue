<template>
  <v-card
    class="mx-auto text-center"
  >
    <!-- <v-card-title class="text-center">
      {{ items.city.name }}
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items.list"
      :items-per-page="5"
      class="elevation-1"
    >
      <template
        #item.main.temp_max="{ item }"
      >
        <v-chip
          :color="getColor(item.main.temp_max)"
        >
          {{ item.main.temp_max }}
        </v-chip>
      </template>
    </v-data-table> -->
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(spark, i) in showItem"
        :key="i"
      >
        <v-sparkline
          height="100%"
          label-size="5"
          :value="spark"
          :labels="showLabel[i]"
          auto-draw
          auto-line-width
          show-labels
          smooth
          line-width="2"
          :gradient="gradients[5]"
          gradient-direction="top"
        />
      </v-carousel-item>
    </v-carousel>
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
export default class Qiita extends Vue{
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