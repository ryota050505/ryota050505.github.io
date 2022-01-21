<template>
  <v-row>
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
                v-text="CategoryButtonText"
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
              class="text-center"
              v-text="'CATEGORY'"
            />
          </v-list-item>
          <v-list-item
            v-for="(item, i) in categories"
            :key="i"
            @click="searchByCategory(item.category)"
          >
            <v-list-item-title
              class="text-center"
              v-text="item.category + '(' + item.count + ')'"
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
              v-if="blogs.length === 0"
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
                記事がありません
              </v-alert>
            </v-col>

            <v-col
              v-for="(blog, i) in blogs"
              :key="'col-' + i"
              cols="6"
              sm="6"
              md="4"
              lg="3"
            >
              <v-lazy
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
                    width="100%"
                    :ripple="{ center: true }"
                    :to="blog.path"
                  >
                    <v-responsive
                      :aspect-ratio="1"
                    >
                    <v-img
                      :src="require(`@/assets/img/${blog.imgsrc ? blog.imgsrc : 'nuxtjs_vuetify.png'}`)"
                      :aspect-ratio="16/10"
                      contain
                    >
                      <v-btn
                        style="text-transform:none;"
                        depressed
                        color="orange accent-1"
                        class="text-subtitle"
                      >
                        {{ blog.category }}
                      </v-btn>
                    </v-img>
                    <v-divider
                    />
                    <v-card-title
                      height="100%"
                      class="text-body-1"
                      v-text="blog.title"
                    />
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        :z-index="0"
                      >
                        <v-btn>
                          See more info
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                    </v-responsive>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-col>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
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
  async asyncData({ $content, route }: { $content: any, route: any }) {
    const { q, category } = route.query

    let query = $content(
        'blog',
        { deep: true }
      )
      .sortBy('createdAt', 'desc')

    if (q) query = query.search(q)
    if (category) query = query.where({ category })

    const blogs = await query.fetch()

    let categories = await $content(
        'blog',
        { deep: true }
      )
      .only(['category'])
      .fetch()
      .then((res: any) => {
        return  [...new Set(res.map((r: any) => r.category))]
      })

    categories = await Promise.all(categories.map((c: string) => $content('blog')
      .only(['slug'])
      .where({ category: c })
      .fetch()
      .then((res: any) => ({
        category: c,
        count: res.length,
      }))
    ))

    return {
      q,
      category,
      blogs,
      categories,
    }
  },
  watchQuery: [
    'q',
    'category',
    'page',
  ],
})
export default class BlogsPage extends Vue {

  private categoryButtonText = "CATEGORY"

  head(): LocalHeader {
    return {
      title: 'Blogs',
    }
  }

  get CategoryButtonText() {
    return this.categoryButtonText
  }

  set CategoryButtonText(newVal: string) {
    this.categoryButtonText = newVal
  }

  private searchByCategory(category: string) {
    this.CategoryButtonText = category
    this.$router.push({
      query: {
        q: this.$route.query.q,
        category,
      }
    })
  }

  private clearCategoryQuery() {
    this.CategoryButtonText = 'CATEGORY'
    this.$router.push({
      query: {
        q: this.$route.query.q,
      }
    })
  }
}
</script>
