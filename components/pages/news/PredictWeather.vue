<template>
  <v-card>
    <v-card-title class="text-center">
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
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class Qiita extends Vue{
  @Prop({ type: Object })
  private items!: object

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