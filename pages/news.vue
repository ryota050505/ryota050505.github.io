<template>
  <v-row>
    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <v-container>
          <title>{{ posts.city.name }}</title>
          {{ date.getMonth()+1 }}月{{ date.getDate() }}日{{WEEK[date.getDay()] + date.getHours() + " :00"}}
          <div>
            {{ posts.list[0].weather[0].icon }}<br>
            {{ Math.round(posts.list[0].main.temp) }}<br>
          </div>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import axios from "axios"
import { Component, Vue } from 'nuxt-property-decorator'

import { LocalHeader } from '~/types/LocalHeader'
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
    console.log('asyncData:', posts)
    const date = new Date(posts.list[0].dt_txt)
    return { posts, date }
  }
}
</script>
