<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  />
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'nuxt-property-decorator'

@Component
export default class Qiita extends Vue{
  @Prop({ type: Array })
  private items!: Array<object>

  private headers = [
    {
      text: '都市',
      aligh: 'start',
      sortable: false,
      value: 'name',
    },
    { text: '現在の気温', value: 'main.temp' },
    { text: '最高気温', value: 'main.temp_max'},
    { text: '最低気温', value: 'main.temp_min'},
    { text: '湿度', value: 'main.humidity'},
    { text: '気圧', value: 'main.pressure' }
  ]
}
</script>