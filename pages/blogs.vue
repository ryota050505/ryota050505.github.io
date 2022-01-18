<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> Category </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"/>

          <v-list-item
            v-for="(c, i) in categories"
            :key="i"
            link
            @click="searchByCategory(c)"
            >
            <v-list-item-content>
              <v-list-item-title> {{ c }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"/>

          <v-list-item
            link
            @click="clearCategoryQuery()"
          >
            <v-list-item-content>
              <v-list-item-title> Clear </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet rounded="lg" light>
        <v-container>

          <v-row
          >
            <v-col
              v-if="getBlogs.length === 0"
              cols="12"
              justify="center"
              align="center"
            >
              <v-alert
                border="right"
                text
                colored-border
                type="info"
                elevation="2"
              >
                検索結果が存在しません
              </v-alert>
            </v-col>

            <v-col
              v-for="(blog, i) in getBlogs"
              :key="'col-' + i"
              cols="12"
              sm="12"
              md="4"
              lg="4"
            >
              <v-hover
                v-slot="{ hover }"
              >
                <v-card
                  nuxt
                  light
                  hover
                  color="white"
                  :shaped="hover"
                  :ripple="{ center: true }"
                  :to="blog.path"
                >
                  <v-img
                    :src="require(`@/assets/img/${blog.imgsrc}`)"
                    aspect-ratio="1/1"
                    contain
                    height="200"
                    width="100%"
                  />
                  <v-divider
                  />
                  <v-card-title
                    color="green"
                    v-text="blog.title"
                  />
                  <v-card-text>
                    <p>{{ blog.description }}</p>
                    <time :datetime="blog.createdAt">
                      {{ $dateFns.format(new Date(blog.createdAt), 'yyyy/MM/dd') }}
                    </time>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
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
  watchQuery: [
    'q',
    'category'
  ],
})
export default class BlogsPage extends Vue {

  private blogs!: Object[]
  private categories!: string[]

  head(): LocalHeader {
    return {
      title: 'Blogs',
    }
  }

  async asyncData({ $content, route }: { $content: any, route: any}) {

    let query = $content('blog', { deep: true }).sortBy('createdAt', 'desc')

    const q: string = route.query.q
    const category: string = route.query.category

    if (q) query = query.search(q)
    if (category) query = query.where({ category })

    const blogs = await query.fetch()
    let categories = await $content('blog', { deep: true }).only(['category']).fetch()
    categories = Array.from(
      new Map(categories.map((category: any) => [category.category, category.category])).values(),
    )
    console.log(blogs, categories)
    return { q, category, blogs, categories }
  }

  get getBlogs() {
    console.log('getBlogs', this.blogs)
    return this.blogs
  }

  private searchByCategory(category: string) {
    this.$router.push({
      query: {
        q: this.$route.query.q,
        category,
      }
    })
  }

  private clearCategoryQuery() {
    this.$router.push({
      query: {
        q: this.$route.query.q,
      }
    })
  }
}
</script>
