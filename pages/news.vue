<template>
  <v-row>
    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <v-data-table dense :headers="headers" :items="items">
        </v-data-table>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from 'nuxt-property-decorator'

import { LocalHeader } from '~/types/LocalHeader'
@Component
export default class NewsPage extends Vue {

  items: any = []
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

  async mounted() {
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments"
    const result = await axios.get(url)
    this.items = result.data.map((comment:any) => ({
      postId: comment.postId,
      email: comment.email,
      name: comment.name,
    }))
  }

  // async asyncData() {
  //   const url = "https://jsonplaceholder.typicode.com/posts/1/comments"
  //   const result = await axios.get(url)
  //   this.items = result.data.map((comment:any) => ({
  //     postId: comment.postId,
  //     email: comment.email,
  //     name: comment.name,
  //   }))
  // }
}
</script>
