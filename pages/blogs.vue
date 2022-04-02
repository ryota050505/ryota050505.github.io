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
                v-if="blogs.length === 0 && q"
              >
                <PagesBlogsNotExist/>
              </v-item>
              <v-item
                v-if="blogs.length === 0 && !q"
              >
                <MaterialsCircleLoader/>
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

import {
  blogsApi,
} from '~/lib/blogsApi'
import head from '~/mixins/head'

@Component({
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

  private blogs = []
  private q = ''

  mounted() {
    blogsApi(this.$content, this.$route)
      .then((res) => {
        this.q = res.q
        this.blogs = res.blogs
      })
  }

  private title = 'Blogs'
  private description = 'メモ書きのようなブログのようなものをちまちま載せていくページです。'
}
</script>
