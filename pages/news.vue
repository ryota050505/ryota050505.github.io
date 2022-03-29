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
import {
  LocalHeader
} from '~/types/LocalHeader'
@Component
export default class NewsPage extends Vue {

  WEEK = ["（日）","（月）","（火）","（水）","（木）","（金）","（土）"]
  items: any = []
  posts: any = []
  date: any = []

  headers = [
    { text: "id", value: "postId" },
    { text: "name", value: "name"},
    { text: "email", value: "email"},
  ]

  head(): LocalHeader {
    return {
      title: 'News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Qiitaや天気情報など、様々な情報をここにまとめて、暇なときに見られるようにするためのページです。',
        }
      ]
    }
  }

  async asyncData({ $axios }: { $axios: any }) {
    const qiita = await getQiitaPosts()
    // const currentWeather = await fetchCurrentWeatherInfo('Tokyo')
    // const threeWeather = await fetchThreeWeatherInfo('Tokyo')
    // 一旦ダミー
    const currentWeather = await $axios.get('/data/weather.json').then((res: any) => res.data)
    const threeWeather = await $axios.get('/data/three_weather.json').then((res: any) => res.data)
    return {
      qiita,
      currentWeather,
      threeWeather,
    }
  }

  private tab: boolean = true
}
</script>
