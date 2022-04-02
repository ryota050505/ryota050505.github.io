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
              <v-list-item
                dense
              >
                <v-list-item-content>
                  <v-select
                    v-model="categorySearchList"
                    label="Category"
                    :items="categoryList"
                    item-text="showName"
                    item-value="category"
                    multiple
                    chips
                    hide-details
                    :prepend-icon="CATEGORY_ICON"
                    clearable
                    small-chips
                    deletable-chips
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                dense
              >
                <v-list-item-content>
                  <v-select
                    v-model="tagSearchList"
                    label="Tag"
                    :items="tagList"
                    item-text="showName"
                    item-value="tag"
                    multiple
                    chips
                    hide-details
                    :prepend-icon="TAG_ICON"
                    clearable
                    small-chips
                    deletable-chips
                  />
                </v-list-item-content>
              </v-list-item>
              <v-divider/>
              <template v-for="(blog, blogIndex) in showBlogList">
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
                  v-if="blogIndex != showBlogList.length-1"
                  :key="'divider-' + blogIndex"
                />
              </template>
              <v-list-item
                v-if="showBlogList.length === 0 && !isLoading"
              >
                <v-list-item-content>
                  <PagesBlogsNotExist/>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-if="showBlogList.length === 0 && isLoading"
                class="text-center"
              >
                <v-list-item-content>
                  <MaterialsCircleLoader/>
                </v-list-item-content>
              </v-list-item>
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
  fetchBlogList, fetchCategoryList, fetchTagList,
} from '~/lib/blogsApi'
import head from '~/mixins/head'
import {
  Blog,
  BlogList
} from '~/types/Blog'
@Component({
  mixins: [
    head,
  ],
})
export default class BlogsPage extends Vue {

  private TAG_ICON = mdiTag
  private CATEGORY_ICON = mdiFolder

  private blogList: BlogList = []

  private tagList: Array<string> = []
  private categoryList: Array<string> = []

  private tagSearchList: Array<string> = []
  private categorySearchList: Array<string> = []

  private isLoading = true

  mounted() {
    fetchBlogList(this.$content)
      .then((res) => {
        this.blogList = res.blogList
        this.isLoading = false
      })

    fetchCategoryList(this.$content)
      .then((res) => {
        this.categoryList = res
      })

    fetchTagList(this.$content)
      .then((res) => {
        this.tagList = res
      })
  }

  get showBlogList() {
    let result = this.blogList
    if (this.categorySearchList.length !== 0) {
      result = result
        .filter(
          (blog: Blog) => this.categorySearchList.includes(blog.category)
        )
    }
    if (this.tagSearchList.length !== 0) {
      result = result
        .filter(
          (blog: Blog) => blog.tags
          .some(
            (tag) => this.tagSearchList.includes(tag)
          )
        )
    }
    return result
  }

  private title = 'Blogs'
  private description = 'メモ書きのようなブログのようなものをちまちま載せていくページです。'
}
</script>
