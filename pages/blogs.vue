<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
      <PagesBlogsSideTransition
        :display-text="categoryButtonText"
        :tool-tip-text="'please choose category'"
        :items="categories"
        :icon="CATEGORY_ICON"
      />
      <PagesBlogsSideTransition
        :display-text="tagButtonText"
        :tool-tip-text="'please choose tag'"
        :items="tags"
        :icon="TAG_ICON"
      />
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
              <PagesBlogsNotExist/>
            </v-col>

            <v-col
              v-for="(blog, i) in blogs"
              :key="'col-' + i"
              cols="6"
              sm="6"
              md="4"
              lg="3"
            >
              <PagesBlogsContent
                :blog="blog"
              />
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

const DEFAULT_CATEGORY_BUTTON_TEXT = "CATEGORY"
const CATEGORY_ICON = 'mdi-folder'
const DEFAULT_TAG_BUTTON_TEXT = "TAG"
const TAG_ICON = 'mdi-tag'

type Query = {
  q?: string,
  category?: string,
  tag?: string,
}

type Conditions = {
  category?: string,
  tags?: object,
}

type Search = (arg0: string) => void

type TemplateConditions = {
  text: string,
  count: number,
  func: Search,
}

@Component({
  async asyncData({ $content, route, redirect }: { $content: any, route: any, redirect: any }) {
    const {
      q,
      category,
      tag
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
