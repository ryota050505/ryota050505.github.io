<template>
  <v-row>
    <v-col
      v-if="!$vuetify.breakpoint.mobile"
      cols="2"
    >
      <v-sheet
        style="
          position: fixed;
        "
        rounded="lg"
      >
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> TOC Link</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-1"/>

          <v-list-item
            v-for="link in blog.toc"
            :key="link.id"
            v-scroll-to="`#${link.id}`"
            link
          >
            <v-list-item-content>
              <v-list-item-title> {{ link.text }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet
        rounded="lg"
        light
      >
        <v-container>
          <article>
            <div class="text-right">
              作成日：{{ $dateFns.format(new Date(blog.createdAt), 'yyyy.MM.dd') }}
            </div>
            <div class="text-right">
              更新日：{{ $dateFns.format(new Date(blog.updatedAt), 'yyyy.MM.dd') }}
            </div>
            <h1
              class="text-center my-5"
            >
              {{ blog.title }}
            </h1>
            <v-divider/>
            <NuxtContent
              class="markdown-body mx-5"
              :document="blog"
            />
            </article>
            <MaterialsPrevNext
              :prev="prev"
              :next="next"
            />
        </v-container>
      </v-sheet>
    </v-col>
    <v-col
      cols="1"
    />
  </v-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

@Component({
  async asyncData({ $content, params}: {$content: any, params: any }) {
    const blog = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      blog,
      prev,
      next,
    }
  }
})
export default class BlogDetail extends Vue {

  mounted() {

    if (!process.browser) return
    this.$nextTick(() => {
      setTimeout(this.moveToHash, 200)
    })
  }

  private moveToHash() {
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(decodeURI(hash))
    }
  }
}
</script>

<style>

h2 {
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: rgb(245, 250, 245);/*背景色*/
  border-left: solid 5px lightgreen;/*左線（実線 太さ 色）*/
}

.v-application code {
  all: unset
}

.remark-code-title {
    background: #d9d7e0;
    border-radius: 0px 0px 4px 4px;
    color: #3a3a3a;
    font-size: 0.75rem;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.25rem 0.5rem;
    position: absolute;
    left: 1rem;
    margin:0 0 0 auto;
}

</style>