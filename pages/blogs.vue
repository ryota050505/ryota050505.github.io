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
  Component,
  Vue,
} from 'nuxt-property-decorator'

import {
  Conditions,
  Query,
  Search,
  TemplateConditions,
} from '~/types/Content'
import {
  LocalHeader,
} from '~/types/LocalHeader'

const DEFAULT_CATEGORY_BUTTON_TEXT = 'CATEGORY'
const CATEGORY_ICON = 'mdi-folder'
const DEFAULT_TAG_BUTTON_TEXT = 'TAG'
const TAG_ICON = 'mdi-tag'

@Component({
  async asyncData({ $content, route, redirect }: { $content: any, route: any, redirect: any }) {
    const {
      q,
      category,
      tag,
    } = route.query

    const categoryButtonText = category || DEFAULT_CATEGORY_BUTTON_TEXT
    const tagButtonText = tag || DEFAULT_TAG_BUTTON_TEXT

    const searchByCategory: Search = (category: string) => {
      const query: Query = {
        q: route.query.q,
        category,
        tag: route.query.tag,
      }
      if ( category === DEFAULT_CATEGORY_BUTTON_TEXT )delete query.category
      redirect({
        query,
      })
    }

    const searchByTag: Search = (tag: string) => {
      const query: Query = {
        q: route.query.q,
        category: route.query.category,
        tag,
      }
      if ( tag === DEFAULT_TAG_BUTTON_TEXT )delete query.tag
      redirect({
        query,
      })
    }

    let query = $content(
        'blog',
        { deep: true }
      )
      .sortBy('createdAt', 'desc')

    // 全文検索
    if (q) query = query.search(q)

    // and条件で検索
    const conditions: Conditions = {}
    if (category) conditions.category = category
    if (tag) conditions.tags = {$contains: tag}
    if (Object.keys(conditions).length) query = query.where(conditions)

    const blogs = await query.fetch()

    const categoriesStringArray = await $content(
        'blog',
        { deep: true }
      )
      .only(['category'])
      .fetch()
      .then((res: any) => {
        return  [...new Set(res.map((r: any) => r.category))]
      })

    const categories: TemplateConditions[] = await Promise.all(categoriesStringArray.map((c: string) => $content('blog')
      .only(['slug'])
      .where({ category: c })
      .fetch()
      .then((res: any) => ({
        text: c,
        count: res.length,
        func: searchByCategory,
      }))
    ))

    categories.unshift({
      text: DEFAULT_CATEGORY_BUTTON_TEXT,
      count: 0,
      func: searchByCategory,
    })

    const tagsStringArray = await $content(
        'blog',
        { deep: true },
      )
      .only(['tags'])
      .fetch()
      .then((res: any) => {
        return [
          ...new Set(
            res.map((r: any) => {
              return r.tags
            }).flat()
          )
        ].flat()
      })

    const tags: TemplateConditions[] = await Promise.all(tagsStringArray.map((t: string) => $content('blog')
      .only(['slug'])
      .where({ tags: { $contains: t }})
      .fetch()
      .then((res: any) => ({
        text: t,
        count: res.length,
        func: searchByTag,
      }))
    ))

    tags.unshift({
      text: DEFAULT_TAG_BUTTON_TEXT,
      count: 0,
      func: searchByTag,
    })

    return {
      q,
      category,
      tag,
      blogs,
      categories,
      tags,
      categoryButtonText,
      tagButtonText,
    }
  },
  watchQuery: [
    'q',
    'category',
    'tag',
    'page',
  ],
})
export default class BlogsPage extends Vue {

  private TAG_ICON = TAG_ICON
  private CATEGORY_ICON = CATEGORY_ICON

  head(): LocalHeader {
    return {
      title: 'Blogs',
    }
  }
}
</script>
