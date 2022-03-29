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
            Weather
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <PagesNewsQiita
              :items="qiita"
            />
          </v-tab-item>
          <v-tab-item>
            ここにお天気
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
import axios from "axios"
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

import { jumpLinkTo } from "~/lib/link"
import {
  getQiitaPosts
} from '~/lib/qiitaApi'
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
    }
  }

  async asyncData({ $config }:any) {
    const API_KEY = $config.WEATHER_API_KEY
    const city = 'Tokyo'
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + ',jp&units=metric&APPID=' + API_KEY
    const res = await axios.get(url)
    const posts = res.data
    const date = new Date(posts.list[0].dt_txt)
    const qiita = await getQiitaPosts()
    return { posts, date, qiita }
  }

  private jumpLinkTo = jumpLinkTo
  private tab: boolean = true
}
</script>
