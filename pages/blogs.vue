<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
    </v-col>

    <v-col>
      <v-sheet rounded="lg" light>
        <v-container>
          <v-list>
            <v-list-item-group>
              <template v-for="(blog, blogIndex) in blogs">
                <v-list-item
                  :key="blogIndex"
                  :to="blog.path"
                  nuxt
                  two-line
                >
                  <v-list-item-action>
                    <v-img
                      :src="require(`@/assets/img/${blog.imgsrc}`)"
                      :width="$vuetify.breakpoint.mobile ? '25px' : '100px'"
                      :height="$vuetify.breakpoint.mobile ? '25px' : '100px'"
                      light
                      :alt=blog.imgsrc
                    ></v-img>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      style="overflow-wrap: break-word;"
                      v-text="blog.title"
                    />
                    <v-list-item-subtitle
                    >
                      <PagesBlogsCardCategory>
                        {{ blog.category }}
                      </PagesBlogsCardCategory>
                      <PagesBlogsCardTag
                        v-for="(tag, tagIndex) in blog.tags"
                        :key="tagIndex"
                      >
                        {{ tag }}
                      </PagesBlogsCardTag>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-if="blogIndex != blogs.length-1"
                  :key="'divider-' + blogIndex"
                >
                </v-divider>
              </template>
              <v-item
                v-if="blogs.length==0"
              >
                <PagesBlogsNotExist/>
              </v-item>
            </v-list-item-group>
          </v-list>
        </v-container>
      </v-sheet>
    </v-col>

    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    />
  </v-row>
</template>

<script lang="ts">
import {
  mdiFolder,
  mdiTag,
} from '@mdi/js'
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

import head from '~/mixins/head'

@Component({
  async asyncData({ $content, route }: { $content: any, route: any }) {
    const {
      q,
    } = route.query

    let query = $content(
        'blog',
        { deep: true }
      )
      .sortBy('createdAt', 'desc')

    // 全文検索
    if (q) query = query.search(q)

    const blogs = await query.fetch()

    return {
      q,
      blogs,
    }
  },
  watchQuery: [
    'q',
    'page',
  ],
  mixins: [
    head,
  ],
})
export default class BlogsPage extends Vue {

  private TAG_ICON = mdiTag
  private CATEGORY_ICON = mdiFolder

  private title = 'Blogs'
  private description = 'メモ書きのようなブログのようなものをちまちま載せていくページです。'
}
</script>
