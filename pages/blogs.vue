<template>
  <v-row>
    <v-col
      v-if="$vuetify.breakpoint.mobile"
      cols="1"
    />
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
      <v-menu transition="scroll-y-transition">
        <template
          #activator="{ on: menu, attrs }"
        >
          <v-tooltip
            bottom
          >
            <template
              #activator="{ on: tooltip }"
            >
              <v-btn
                style="text-transform:none"
                v-bind="attrs"
                width="100%"
                v-on="{ ...tooltip, ...menu }"
                v-text="getCategoryButtonText"
              />
            </template>
            <span>please choose category</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item
            link
            @click="clearCategoryQuery()"
          >
            <v-list-item-title
              style='text-align: center;'
              v-text="'CATEGORY'"
            />
          </v-list-item>
          <v-list-item
            v-for="(item, i) in categories"
            :key="i"
            @click="searchByCategory(item)"
          >
            <v-list-item-title
              style='text-align: center;'
              v-text="item"
            />
          </v-list-item>
        </v-list>
      </v-menu>
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
              <v-lazy
                v-model="lazyIsActive"
                :options="{
                  threshold: 1.0
                }"
                transition="fade-transition"
                height="100%"
              >
                <v-hover
                  v-slot="{ hover }"
                >
                  <v-card
                    nuxt
                    light
                    hover
                    class="rounded-card d-flex flex-column"
                    color="white"
                    height="100%"
                    max-width="100%"
                    :shaped="hover"
                    :ripple="{ center: true }"
                    :to="blog.path"
                  >
                    <v-img
                      :src="require(`@/assets/img/${blog.imgsrc}`)"
                      style="max-height:214px" height="214px"
                    />
                    <v-spacer/>
                    <v-divider
                    />
                    <v-spacer/>
                    <v-card-title
                      justify="center"
                      v-text="blog.title"
                    />
                    <v-spacer/>
                    <v-card-text
                      height="100%"
                    >
                      <p>{{ blog.description }}</p>
                    </v-card-text>
                    <v-spacer/>
                    <v-card-text
                      height="100%"
                    >
                      <time :datetime="blog.createdAt" height="100%">
                        {{ $dateFns.format(new Date(blog.createdAt), 'yyyy/MM/dd') }}
                      </time>
                    </v-card-text>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                      >
                        <v-btn>
                          See more info
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-col>
    <v-col
      xs="1"
      sm="1"
      md="2"
      lg="2"
      xl="2"
      cols="1"
    />
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
  private categoryButtonText = "CATEGORY"
  private lazyIsActive = false

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
    return { q, category, blogs, categories }
  }

  get getBlogs() {
    return this.blogs
  }

  get getCategoryButtonText() {
    return this.categoryButtonText
  }

  private searchByCategory(category: string) {
    this.categoryButtonText = category
    this.$router.push({
      query: {
        q: this.$route.query.q,
        category,
      }
    })
  }

  private clearCategoryQuery() {
    this.categoryButtonText = 'CATEGORY'
    this.$router.push({
      query: {
        q: this.$route.query.q,
      }
    })
  }
}
</script>
