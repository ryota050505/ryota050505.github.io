<template>
  <v-row>
    <v-col cols="2">
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-content>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item link color="grey lighten-4">
            <v-list-item-content>
              <v-list-item-title> Refresh </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <ul>
          <li v-for="blog in blogs" :key="blog.slug">
            <nuxt-link :to="blog.path">
              <time :datetime="blog.createdAt">
                {{ $dateFns.format(new Date(blog.createdAt), 'yyyy/MM/dd') }}
              </time>
              <p>{{ blog.title }}</p>
            </nuxt-link>
          </li>
        </ul>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

import {
  LocalHeader,
} from '~/types/LocalHeader'
@Component({
  watchQuery: ['q']
})
export default class BlogsPage extends Vue {

  head(): LocalHeader {
    return {
      title: 'Blogs',
    }
  }

  async asyncData({ $content, route }: { $content: any, route: any}) {
    const q: string = route.query.q
    let query = $content('blog', { deep: true }).sortBy('date', 'desc')
    if (q) query = query.search(q)
    const blogs = await query.fetch()
    return { q, blogs }
  }
}
</script>
