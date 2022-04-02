<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />

    <v-col>
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
            CurrentWeather
          </v-tab>
          <v-tab>
            PredictWeather
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <PagesNewsQiita
              :items="qiita"
            />
          </v-tab-item>
          <v-tab-item>
            <PagesNewsCurrentWeather
              :items="[currentWeather]"
            />
          </v-tab-item>
          <v-tab-item>
            <PagesNewsPredictWeather
              :items="threeWeather"
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
} from 'nuxt-property-decorator'

import {
  getQiitaPosts
} from '~/lib/qiitaApi'
import {
  fetchCurrentWeatherInfo,
  fetchThreeWeatherInfo,
} from '~/lib/weatherApi'
import head from '~/mixins/head'
@Component({
  mixins: [
    head,
  ],
})
export default class NewsPage extends Vue {

  private title = 'News'
  private description = 'Qiitaや天気情報など、様々な情報をここにまとめて、暇なときに見られるようにするためのページです。'
  private tab = true

  private qiita = []

  mounted() {
    getQiitaPosts(this.$config.QIITA_ENDPOINT_URL, this.$config.QIITA_API_KEY)
      .then((res: any) => {
        this.qiita = res
      })
  }

  async asyncData({ $axios }: { $axios: any }) {
    // const currentWeather = await fetchCurrentWeatherInfo('Tokyo')
    // const threeWeather = await fetchThreeWeatherInfo('Tokyo')
    // 一旦ダミー
    const currentWeather = await $axios.get('/data/weather.json').then((res: any) => res.data)
    const threeWeather   = await $axios.get('/data/three_weather.json').then((res: any) => res.data)
    return {
      currentWeather,
      threeWeather,
    }
  }
}
</script>
