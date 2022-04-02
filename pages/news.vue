<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />

    <v-col
      :cols="!$vuetify.breakpoint.mobile? 8 : 12"
    >
      <v-container>
        <v-tabs
          v-model="tab"
          show-arrows
        >
          <v-tabs-slider color="teal lighten-3"/>
          <v-tab>
            Qiita
          </v-tab>
          <v-tab>
            OnecallWeather
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <PagesNewsQiita
              :items="Qiita"
            />
          </v-tab-item>
          <v-tab-item>
            <v-select
              v-model="selected"
              :items="SelectorItem"
              label="Prefectual Seat"
            />
            <PagesNewsOnecallWeather
              :item="OnecallWeather"
              :city="Selected"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-col>

    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
} from 'nuxt-property-decorator'

import { PREFECTURE_LIST } from '~/constants/Weather'
import {
  getQiitaPosts
} from '~/lib/qiitaApi'
import {
  fetchOnecallWeatherInfo,
} from '~/lib/weatherApi'
import head from '~/mixins/head'
@Component({
  mixins: [
    head,
  ],
})
export default class NewsPage extends Vue {

  private selected = '京都'

  private selectorValueList = Object.entries(PREFECTURE_LIST).map(([_, value]) => value)

  get SelectorItem() {
    return this.selectorValueList
  }

  get Selected() {
    return this.selected
  }

  get OnecallWeather() {
    return this.onecallWeather
  }

  get Qiita() {
    return this.qiita
  }

  private title = 'News'
  private description = 'Qiitaや天気情報など、様々な情報をここにまとめて、暇なときに見られるようにするためのページです。'
  private tab: number = 0

  private qiita = []
  private currentWeather = []
  private threeWeather = []
  private onecallWeather = {}

  mounted() {
    getQiitaPosts(this.$config.QIITA_ENDPOINT_URL, this.$config.QIITA_API_KEY)
      .then((res: any) => {
        this.qiita = res
      })

    // fetchCurrentWeatherInfo(this.$config.WEATHER_ENDPOINT_URL, this.$config.WEATHER_API_KEY, 'Tokyo')
    //   .then((res: any) => {
    //     this.currentWeather = res
    //   })

    // fetchThreeWeatherInfo(this.$config.WEATHER_ENDPOINT_URL, this.$config.WEATHER_API_KEY, 'Tokyo')
    //   .then((res: any) => {
    //     this.threeWeather = res
    //   })

    fetchOnecallWeatherInfo(this.$config.WEATHER_ENDPOINT_URL, this.$config.WEATHER_API_KEY, PREFECTURE_LIST.KYOTO)
      .then((res: any) => {
        this.onecallWeather = res
      })
  }

  @Watch('selected')
  onChangeSelected() {
    fetchOnecallWeatherInfo(this.$config.WEATHER_ENDPOINT_URL, this.$config.WEATHER_API_KEY, this.selected)
      .then((res: any) => {
        this.onecallWeather = res
      })
  }

  async asyncData({ $axios }: { $axios: any }) {
    // 一旦ダミー
    const currentWeather = await $axios.get('/data/weather.json').then((res: any) => res.data)
    const threeWeather   = await $axios.get('/data/three_weather.json').then((res: any) => res.data)
    // const onecallWeather = await $axios.get('/data/one_call.json').then((res: any) => res.data)
    // console.log(onecallWeather)
    return {
      currentWeather,
      threeWeather,
      // onecallWeather,
    }
  }
}
</script>
